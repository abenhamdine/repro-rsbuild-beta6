import AjaxHelper from '../../../Core/helper/AjaxHelper.js';
import InstancePlugin from '../../../Core/mixin/InstancePlugin.js';
import MultiPageExporter from './exporter/MultiPageExporter.js';
import SinglePageExporter from './exporter/SinglePageExporter.js';
import BrowserHelper from '../../../Core/helper/BrowserHelper.js';
import ObjectHelper from '../../../Core/helper/ObjectHelper.js';
import ExportDialog from '../../view/export/ExportDialog.js';
import GridFeatureManager from '../GridFeatureManager.js';
import WidgetHelper from '../../../Core/helper/WidgetHelper.js';
import Mask from '../../../Core/widget/Mask.js';
import Localizable from '../../../Core/localization/Localizable.js';

/**
 * @module Grid/feature/export/PdfExport
 */

/**
 * Generates PDF/PNG files from the Grid component.
 *
 *
 * **NOTE:** This feature will make a fetch request to the server, posting
 * the HTML fragments to be exported. The {@link #config-exportServer} URL must be configured.
 *
 * ## Usage
 *
 * ```javascript
 * let grid = new Grid({
 *     features : {
 *         pdfExport : {
 *             exportServer : 'http://localhost:8080' // Required
 *         }
 *     }
 * })
 *
 * // Opens popup allowing to customize export settings
 * grid.features.pdfExport.showExportDialog();
 *
 * // Simple export
 * grid.features.pdfExport.export({
 *     columns : grid.columns.map(c => c.id) // Required, set list of column ids to export
 * }).then(result => {
 *     // Response instance and response content in JSON
 *     let { response } = result;
 * });
 * ```
 *
 * ## Exporters
 *
 * There are two exporters available by default: `singlepage` and `multipage`. As name suggests, singlepage exporter generates
 * single page with content scaled to fit the provided {@link #config-paperFormat} and multipage exporters generates as
 * many pages as required to fit all requested content, unscaled
 *
 * @extends Core/mixin/InstancePlugin
 *
 * @demo Grid/export
 * @classtype pdfExport
 */
export default class PdfExport extends Localizable(InstancePlugin) {
    static get $name() {
        return 'PdfExport';
    }

    static get defaultConfig() {
        return {
            /**
             * URL of the print server.
             * @config {String}
             */
            exportServer : undefined,

            /**
             * Name of the exported file.
             * @config {String}
             */
            fileName : null,

            /**
             * Format of the exported file, selectable from `pdf` or `png`. By default plugin exports panel contents to PDF
             * but PNG file format is also available.
             * @config {String}
             * @default
             * @group Export file config
             */
            fileFormat : 'pdf',

            /**
             * Export server will navigate to this url first and then will change page content to whatever client sent.
             * This option is useful with react dev server, which has pretty strict CORS policy.
             * @config {String}
             */
            clientURL : null,

            /**
             * Export paper format. Available options are A1...A5, Legal, Letter.
             * @config {String}
             * @default
             * @group Export file config
             */
            paperFormat : 'A4',

            /**
             * Orientation. Options are `portrait` and `landscape`.
             * @config {String}
             * @default
             * @group Export file config
             */
            orientation : 'portrait',

            /**
             * Specifies which rows to export. `all` for complete set of rows, `visible` for only rows currently visible.
             * @config {String}
             * @group Export file config
             */
            rowsRange : 'all',

            /**
             * Set to true to align row top to the page top on every exported page. Only applied to multipage export.
             * @config {Boolean}
             * @default
             */
            alignRows : false,

            /**
             * When exporting large views (hundreds of pages) stringified HTML may exceed browser or server request
             * length limit. This config allows to specify how many pages to send to server in one request.
             * @config {Number}
             * @default
             * @private
             */
            pagesPerRequest : 0,

            /**
             * Config for exporter.
             * @config {Object}
             * @private
             */
            exporterConfig : null,

            /**
             * Type of the exporter to use. Should be one of the configured {@link #config-exporters}
             * @config {String}
             * @default
             */
            exporterType : 'singlepage',

            /**
             * List of exporter classes to use in export feature
             * @config {Grid.feature.export.exporter.Exporter[]}
             * @default
             */
            exporters : [SinglePageExporter, MultiPageExporter],

            /**
             * `True` to replace all linked CSS files URLs to absolute before passing HTML to the server.
             * When passing a string the current origin of the CSS files URLS will be replaced by the passed origin.
             *
             * For example: css files pointing to /app.css will be translated from current origin to {translateURLsToAbsolute}/app.css
             * @config {Boolean|String}
             * @default
             */
            translateURLsToAbsolute : true,

            /**
             * When true links are converted to absolute by combining current window location (with replaced origin) with
             * resource link.
             * When false links are converted by combining new origin with resource link (for angular)
             * @config {Boolean}
             * @default
             */
            keepPathName : true,

            /**
             * When true, page will attempt to download generated file.
             * @config {Boolean}
             * @default
             */
            openAfterExport : true,

            /**
             * False to open in the current tab, true - in a new tab
             * @config {Boolean}
             * @default
             */
            openInNewTab : false,

            /**
             * A template function used to generate a page header. It is passed an object with ´currentPage´ and `totalPages´ properties.
             *
             * ```javascript
             * let grid = new Grid({
             *     appendTo   : 'container',
             *     features : {
             *         pdfExport : {
             *             exportServer : 'http://localhost:8080/',
             *             headerTpl : ({ currentPage, totalPages }) => `
             *                 <div class="demo-export-header">
             *                     <img src="coolcorp-logo.png"/>
             *                     <dl>
             *                         <dt>Date: ${DateHelper.format(new Date(), 'll LT')}</dt>
             *                         <dd>${totalPages ? `Page: ${currentPage + 1}/${totalPages}` : ''}</dd>
             *                     </dl>
             *                 </div>`
             *          }
             *     }
             * });
             * ```
             * @config {Function}
             */
            headerTpl : null,

            /**
             * A template function used to generate a page footer. It is passed an object with ´currentPage´ and `totalPages´ properties.
             *
             * ```javascript
             * let grid = new Grid({
             *      appendTo   : 'container',
             *      features : {
             *          pdfExport : {
             *              exportServer : 'http://localhost:8080/',
             *              footerTpl    : () => '<div class="demo-export-footer"><h3>© 2020 CoolCorp Inc</h3></div>'
             *          }
             *      }
             * });
             * ```
             * @config {Function}
             */
            footerTpl : null,

            /**
             * An object containing the Fetch options to pass to the export server request. Use this to control if credentials are sent
             * and other options, read more at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
             * @config {Object}
             */
            fetchOptions : null
        };
    }

    /**
     * When export is started from GUI ({@link Grid.view.export.ExportDialog}), export promise can be accessed via
     * this property.
     * @property {Promise}
     */
    get currentExportPromise() {
        return this._currentExportPromise;
    }

    set currentExportPromise(value) {
        this._currentExportPromise = value;
    }

    get exportersMap() {
        return this._exportersMap || (this._exportersMap = new Map());
    }

    getExporter(config = {}) {
        const
            me               = this,
            { exportersMap } = me,
            { type }         = config;

        let exporter;

        if (exportersMap.has(type)) {
            exporter = exportersMap.get(type);
        }
        else {
            const exporterClass = this.exporters.find(cls => cls.type === type);

            if (!exporterClass) {
                throw new Error(`Exporter type ${type} is not found. Make sure you've configured it`);
            }

            config = ObjectHelper.clone(config);
            delete config.type;

            exporter = new exporterClass(config);

            exporter.relayAll(me);

            exportersMap.set(type, exporter);
        }

        return exporter;
    }

    buildRequest(pages, config) {
        return {
            html        : JSON.stringify(pages),
            fileFormat  : config.fileFormat,
            format      : config.paperFormat,
            orientation : config.orientation
        };
    }

    buildExportConfig(config) {
        const
            me = this,
            {
                client,
                exportServer,
                clientURL,
                fileFormat,
                paperFormat,
                rowsRange,
                alignRows,
                orientation,
                exporters,
                translateURLsToAbsolute,
                keepPathName,
                headerTpl,
                footerTpl
            }  = me;

        return ObjectHelper.assign({
            client,
            exportServer,
            clientURL,
            fileFormat,
            paperFormat,
            rowsRange,
            alignRows,
            orientation,
            translateURLsToAbsolute,
            keepPathName,
            headerTpl,
            footerTpl,
            exporterType : exporters[0].type,
            fileName     : client.$name
        }, config);
    }

    /**
     * Starts the export process. Accepts a config object which overrides any default configs.
     * **NOTE**. Component should not be interacted with when export is in progress
     *
     * @param {Object} config
     * @param {String[]} config.columns (requried) List of column ids to export. E.g.
     * ```grid.features.pdfExport.export({ columns : grid.columns.map(c => c.id) })```
     * @returns {Promise} Object of the following structure
     * ```
     * {
     *     response // Response instance
     * }
     * ```
     * @async
     */
    async export(config = {}) {
        const
            me = this,
            {
                client,
                pagesPerRequest
            }  = me;

        config = me.buildExportConfig(config);

        let result;

        config.exporterConfig = ObjectHelper.assign({
            type                    : config.exporterType,
            translateURLsToAbsolute : config.translateURLsToAbsolute,
            keepPathName            : config.keepPathName
        }, config.exporterConfig || {});

        /**
         * Fires before export started. Return `false` to cancel the export.
         * @event beforeExport
         * @preventable
         * @param {Object} config Export config
         */
        if (client.trigger('beforeExport', config) !== false) {
            // Raise flag on the client to render all suggested dependencies
            client.ignoreViewBox = true;

            client.mask(client.loadMask);

            try {
                const exporter = me.getExporter(config.exporterConfig);

                if (pagesPerRequest === 0) {
                    const pages = await exporter.export(config);

                    /**
                     * Fires when export progress changes
                     * @event exportStep
                     * @param {Number} progress Current progress, 0-100
                     * @param {String} text Optional text to show
                     */
                    me.trigger('exportStep', { progress : 90, text : me.L('Waiting for response from server...') });

                    const response = await AjaxHelper.post(
                        config.exportServer,
                        {
                            html        : pages,
                            orientation : config.orientation,
                            format      : config.paperFormat,
                            fileFormat  : config.fileFormat,
                            fileName    : config.fileName,
                            clientURL   : config.clientURL
                        },
                        Object.assign({
                            credentials : 'omit',
                            parseJson   : true
                        }, me.fetchOptions)
                    );

                    result = { response };

                    if (response.ok) {
                        const responseJSON = response.parsedJson;

                        if (me.openAfterExport) {
                            if (responseJSON.success) {
                                if (BrowserHelper.isIE11) {
                                    window.open(responseJSON.url, 'ExportedPanel');
                                }
                                else {
                                    const link = document.createElement('a');

                                    link.download = config.fileName;
                                    link.href = responseJSON.url;

                                    if (me.openInNewTab) {
                                        link.target = '_blank';
                                    }

                                    document.body.appendChild(link);

                                    link.click();

                                    document.body.removeChild(link);
                                }
                            }
                            else {
                                WidgetHelper.toast(responseJSON.msg);
                            }
                        }
                    }
                }
            }
            catch (error) {
                if (error instanceof Response) {
                    result = { response : error };
                }
                else {
                    result = { error };
                }

                throw error;
            }
            finally {
                if (me.exportDialog) {
                    me.exportDialog.close();
                }

                client.unmask();

                client.ignoreViewBox = false;

                /**
                 * Fires when export has finished
                 * @event export
                 * @param {Response} [response] Optional response, if received
                 * @param {Error} [error] Optional error, if exception occurred
                 */
                me.trigger('export', result);

                if (result.error) {
                    WidgetHelper.toast(me.L('Export failed'));
                }
                else if (!result.response.ok) {
                    WidgetHelper.toast(me.L('Server error'));
                }

                client.trigger('export', result);
            }
        }

        return result;
    }

    /**
     * Shows {@link Grid.view.export.ExportDialog export dialog}
     */
    showExportDialog() {
        const me = this;

        if (!me.exportDialog) {
            me.exportDialog = new ExportDialog({
                client    : me.client,
                exporters : me.exporters,
                listeners : {
                    export  : me.onExportDialogExport,
                    thisObj : me
                }
            });
        }

        me.exportDialog.show();
    }

    onExportDialogExport({ values }) {
        const me = this;

        me.mask = new Mask({
            progress    : 0,
            maxProgress : 100,
            text        : 'Generating pages...',
            element     : me.exportDialog.element
        });

        const detacher = me.on({
            export() {
                me.mask.close();
                detacher();
            },
            exportstep({ progress, text }) {
                me.mask.progress = progress;
                me.mask.text = text;
            }
        });

        me.currentExportPromise = me.export(values);

        // Clear current export promise
        me.currentExportPromise.then(() => me.currentExportPromise = null);
    }
}

GridFeatureManager.registerFeature(PdfExport, false, 'Grid');

// Format expected by export server
// const pageFormat = {
//     html       : '',
//     column     : 1,
//     number     : 1,
//     row        : 1,
//     rowsHeight : 1
// };
//
// const format = {
//     fileFormat  : 'pdf',
//     format      : 'A4',
//     orientation : 'portrait',
//     range       : 'complete',
//     html        : { array : JSON.stringify(pageFormat) }
// };
