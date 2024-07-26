# 3.1.2 - 2020-04-17

## FEATURES / ENHANCEMENTS

* The scheduler.module.js bundle is now lightly transpiled to ECMAScript 2015 using Babel to work with more browsers out of the box
* Fixed #542 - Should be possible to toggle constrainDragToResource dynamically

## BUG FIXES

* Fixed #443 - Failed CrudManager load/sync should show failure message just like Store loading does
* Fixed #464 - Dependencies are not refreshed after filtering with schedule region collapsed
* Fixed #471 - CrudManager + AjaxHelper sends wrong content type
* Fixed #515 - Dependencies cannot be created in scheduler web component

# 3.1.1 - 2020-03-27

## BUG FIXES

* Fixed #120 - Vertical mode misses 'renderTimeSpan' method.
* Fixed #314 - Load mask is not hidden after receiving unsuccessful response
* Fixed #369 - Resource time range title changes on scrolling in vertical mode
* Fixed #404 - Crash in CrudManager demo after saving updated event
* Fixed #409 - Crash when clicking next time arrow in event editor if end date is cleared
* Fixed #441 - Recurrence dialog is too narrow
* Fixed #445 - React: Scheduler crashes when features object passed as prop
* Fixed #454 - "No records to display" shown during loading
* Fixed #457 - Docker container with gantt ASP.NET Core demo cannot connect to MySQL container
* Fixed #459 - Event editor should be scrollable if it does not fit in viewport 
* Fixed #466 - `constrainDragToResource` should be supported in vertical mode 
 
# 3.1.0 - 2020-03-10

## FEATURES / ENHANCEMENTS

* New Recurring Events React+TypeScript demo (Fixed #655)
* New Recurring Events Angular 9 demo (Fixed #654)
* Added new demo showing integration with .NET backend (Fixed #299)
* Added new demo showing integration with .NET Core backend (Fixed #299)
* Font Awesome 5 Pro was replaced with Font Awesome 5 Free as the default icon font (MIT / SIL OFL license)
  
## BUG FIXES

* Fixed #083 - Drag selection element position wrong if page is scrolled
* Fixed #320 - Resource margin does not affect milestone size
* Fixed #346 - Cascading combo box not editable
* Fixed #347 - Crash if starting timerange drag while previous drag operation is finalizing 
* Fixed #348 - Tooltip misaligned after clicking add in tasks demo 
* Fixed #380 - Vue custom event editor shows editor only once
* Fixed #384 - Dependencies not repainted after group collapse / expand 
* Fixed #385 - Ghost event element remains in view after adding new event/resource and syncing changes to backend
* Fixed #403 - Aborted fetch should not create exception in console 

# 3.0.4 - 2020-02-24

## FEATURES / ENHANCEMENTS

* Compressed non-working time was added to TimeAxis demo (Fixed #319)

## BUG FIXES

* Fixed #198 - Promise not resolved when showing a shown Popup
* Fixed #203 - Events stay selected after other events selection if they are not in the viewport
* Fixed #288 - Add recurringTimeSpans to framework wrappers and update guides
* Fixed #292 - Crash when using arrow key in simple event editor
* Fixed #295 - Scroll is reset to top after clicking time axis in vertical mode
* Fixed #333 - Crash when creating dependency in web components demo 

# 3.0.3 - 2020-02-13

## FEATURES / ENHANCEMENTS

* Added a new demo using cellGenerator + improved cellGenerator docs  (Fixed #250)
* Added new `resourceheaderclick`, `resourceheaderdblclick`, `resourceheadercontextmenu` events fired when interacting with resource header in vertical mode (Fixed #282).

## API CHANGES

* DEPRECATED: The `beforeZoomChange` and `zoomChange` events are deprecated. These are synonyms for
`beforePresetChange` and `presetChange`

## BUG FIXES

* Fixed #194 - fillTicks fills the next day if time is 00:00:00
* Fixed #243 - Scheduler doesn't properly render rows for resource tree loaded on demand
* Fixed #245 - timeRanges not refreshed if its store uses beginBatch/endBatch
* Fixed #260 - Cannot enter negative lag in dependency editor
* Fixed #263 - Scrolling breaks after event resize
* Fixed #276 - Event disappears after drag drop (Angular Drag from Grid demo)


# 3.0.2 - 2020-01-30

## FEATURES / ENHANCEMENTS

* PDF export server was refactored. Removed websocket support until it is implemented on a client side.
  Added logging. Added configuration file (see `app.config.js`) which can be overridden by CLI options.
  Multipage export performance was increased substantially (see `max-workers` config in server readme).
  (Fixed #112)

## API CHANGES

* Added `image` field for `ResourceModel`

## BUG FIXES

* Fixed #195 - ExtJS modern demo: not possible to create more than one instance dynamically
* Fixed #207 - EventDrag constraint wrong when constrainDragToTimeline is false
* Fixed #210 - Assignment store does not fire `change` event when editing resources
* Fixed #220 - Load mask with CrudManager not working
* Fixed #226 - columnLinesFor config is ignored when switching between view presets
* Fixed #233 - Assignments updated when just changing event dates in event editor
* Fixed #234 - Missing "Recurring events" demo resource image

# 3.0.1 - 2020-01-17

## FEATURES / ENHANCEMENTS

* PDF Export feature uses *Scheduler* as the default file name (Fixed #117)
* Added new Grid methods `enableScrollingCloseToEdges` / `disableScrollingCloseToEdges` to activate automatic scrolling
  of a SubGrid when mouse is close to the edges. Demonstrated in the updated scheduler 'dragfromgrid' demo.
* Added support to show async tooltips (Fixed #148). Showcased in updated `tooltips` demo. See EventTooltip feature docs
  for information.

## API CHANGES

* BREAKING (for those who build from sources): "Common" package was renamed to "Core", so all our basic classes
  should be imported from `lib/Core/`
* Added `resourceImageExtension` config to `SchedulerEventRendering` mixin to support setting resource image extension
* EventNavigation#navigator config changed from public to internal. This config should not be needed in normal use of
  the Scheduler

## BUG FIXES

* Fixed #25  - eventContextMenu triggered when right clicking summary bar
* Fixed #45  - Event not derendered after setting future dates in event editor of new event
* Fixed #59  - EventDragSelect feature selects events even if drag happens on locked grid
* Fixed #62  - Event disappears after drag cancelled with ESC and followed by ZoomIn/Out
* Fixed #96  - Drag create proxy not removed if autoClose is false on EventEdit feature
* Fixed #97  - weekStartDay not updated after localization
* Fixed #104 - Calendar icon should be shown in tooltips if date format doesn't include hour info
* Fixed #105 - Time axis breaks after scrolling leftwards a long way bug high-priority resolved
* Fixed #119 - Infinite image requests in vertical demo
* Fixed #129 - Crash when exporting scheduler with no dependencies
* Fixed #130 - Crash when export Scheduler with columnLines disabled
* Fixed #136 - PresetManager methods not declared as static in gantt.d.ts
* Fixed #137 - Drag drop of multiple selected events in vertical mode does not work
* Fixed #146 - Recurring event not rendering occurrences
* Fixed #163 - Recurrence UI should be disabled by default
* Fixed #168 - Broken Vue CDN demo
* Fixed #169 - Features disabled in Vue demos
* Fixed #189 - DOCS: Public configs should not link to private configs/classes

# 3.0.0 - 2019-12-20

## FEATURES / ENHANCEMENTS

* New Ionic Themes demo which shows using and changing included themes. (Fixed #9394)
* Added support for exporting the Scheduler to PDF and PNG. It is showcased in several examples, pdf-export for
  Angular, React and Vue frameworks, as well as in examples/export. The feature requires a special export server,
  which you can find in the examples/_shared/server folder. You will find more instructions in the README.md file in
  each new demo. (Fixed #6268)
* Added public config to disable recurring event fields in event editor UI (Fixed #71)

## API CHANGES

* BREAKING: The `ViewPreset` now uses a `headers` array instead of named header levels in a `headerConfig` property.
  So the `columnLinesFor` property is now an index into that array. (Fixed #9325, #4469)
* ViewPresets and zoom levels were refactored for easier usage. `ViewPresets` are now contained in a `PresetStore` and
  zooming steps between them, removing the need of manually defining `zoomLevels`.
* TimeSpan (and its subclasses such as EventModel) now uses `DateHelper.defaultFormat` as the default format for parsing
  strings to dates (applies to `startDate` and `endDate`). The actual format used by default is still the same, but now
  more easily configurable (Fixed #32).
* Scheduler now also uses `DateHelper.defaultFormat` as its default format for the timeaxis start and end dates. This
  change makes it behave slightly different, previously it would expect milliseconds in its format and now it does not.
* Scheduler#getDateFromX is deprecated because it is orientation dependent. Scheduler#getDateFromCoordinate should be
  used if you have the position on the correct axis, or Scheduler.getDateFromXY if you have a coordinate pair.

## BUG FIXES

* Fixed #6 - hideHeaders in combination with timeRanges causes crash
* Fixed #18 - onEventCommit triggers too many row refreshes
* Fixed #58 - Timeline is broken when event is scrolled into view
* Fixed #65 - Event is not repainted to the updated time if its resource has been changed too
* Fixed #72 - Drop date is resolved based on cursor position instead of proxy element
* Fixed #8569 - Scheduler doesn't paint events for resource with id 0
* Fixed #8570 - Dependencies with id: null are reusing one dependency line
* Fixed #9456 - Event editor recurring UI should be hidden when RecurringEvents feature is disabled

# 2.3.1 - 2019-11-20

## BUG FIXES

* Fixed #3 - Crash when using recurrence custom field

# 2.3.0 - 2019-11-06

## FEATURES / ENHANCEMENTS

### SCHEDULER IMPROVEMENTS

* Scheduler now supports recurring events (Fixed #8305). See new `recurrence` demo and `recurringEvents` feature in the
  docs for details.
* Added a thinner version of Scheduler called `SchedulerBase`. It is a Scheduler without default features, allowing
  smaller custom builds using for example WebPack. See the new `custom-build` demo for a possible setup (Fixed #7883)
* Event removal using keyboard and the event editor is now both preventable through the `beforeEventDelete` event
  triggered on Scheduler (Fixed #8681)
* The horizontal time axis header now only renders ticks in view, reducing the performance impact of displaying long
  time ranges (Fixed #9022)
* Added `dragHelperConfig` to EventDrag feature to be able to easily configure the internal DragHelper instance (Fixed #9276)
* `mode` property is supported by Angular/React/Vue wrappers by default now (Fixed #9320)
* `scheduleClick`, `scheduleDblClick` and `scheduleContextmenu` events now also include information about the current
  tickStartDate and tickEndDate of the timeAxis
* New `scheduleMouseMove` event added with same event signature as `scheduleClick`
* Support for disabling features at runtime has been improved, all features except Tree can now be disabled at any time.
* Widgets may now adopt a preexisting DOM node to use as their encapsulating `element`. This reduces DOM footprint when
  widgets are being placed inside existing applications, or when used inside UI frameworks which provide a DOM node. See
  the `adopt` config option. (Fixed #9414)

### DEMO UPDATES

* The `dragfromgrid` demo was updated with toggling between vertical and horizontal mode (Fixed #8985)
* The `drag-between-schedulers` and `partners` demos uses a new Splitter widget to allow adjusting the size of the
  Schedulers (Fixed #9138)

### ANGULAR/REACT/VUE

* Experimental: The React wrapper has been updated to support using React components (JSX) in cell renderers and as cell
  editors. Please check out the updated React demos to see how it works (Fixed #7334, Fixed #9043)
* React Integration Guide updated with information on new JSX and React Components renderers and editors support (Fixed #9245)
* Added new Angular 8 demo (Fixed #9336)

## BUG FIXES

* Fixed #7998 - DOCS: Links are wrong if open grid docs from scheduler docs
* Fixed #8272 - Dep lines can be orhpaned when multiassigned event shares resource with single assigned
* Fixed #8456 - Dependencies feature not working in nested events demo
* Fixed #8522 - STYLING: Line header element and body element should have same color
* Fixed #8642 - Custom event sorting is not supported
* Fixed #8660 - DOCS: Column lines major ticks are not thicker
* Fixed #8702 - TimeRanges feature throws an exception when Scheduler is in a Popup
* Fixed #8898 - Resizing should work also when events are small
* Fixed #8972 - Crash in vertical mode if a resource has no name defined
* Fixed #9036 - Assigning to a resource which is filtered out doesn't move event to the resource
* Fixed #9067 - Crud manager should support fetchOptions
* Fixed #9110 - Crash if undoing change to event which is inside collapsed parent
* Fixed #9234 - Event disappears on drag/drop between multiple schedulers
* Fixed #9236 - Dependendency store changes are not empty after initialization
* Fixed #9249 - Tooltip End Date wrong if event ends on midnight
* Fixed #9254 - draggable field not respected for multi-event drag
* Fixed #9258 - VUE: Custom Event Editor demo does not use the full screen height on iPad
* Fixed #9270 - Crash after creating event in vertical mode after sync
* Fixed #9307 - eventDragSelect feature missing from react wrappers
* Fixed #9316 - Should be possible to specify renderer for ResourceInfoColumn
* Fixed #9395 - Code shown in ResourceInfoColumn after few changes to events

# 2.2.5 - 2019-09-16

## FEATURES / ENHANCEMENTS

* Added example that shows how to use Vue popup as a custom event editor (partial fix of #8721)
* Added example that shows how to use Angular popup as a custom event editor (fix of #8721)

## BUG FIXES

* Fixed #9110 - Crash if undoing change to event which is inside collapsed parent
* Fixed #9199 - TimelineZoomable passes level: -1 in the zoomChange event
* Fixed #9202 - ResourceInfo column reloads non-existing image instantly
* Fixed #9210 - Crash when opening eventEditor programmatically in vertical mode
* Fixed #9215 - CrudManager only syncs featured stores
* Fixed #9216 - DOCS: Nested configs look broken
* Fixed #9218 - TimeRanges feature doesn't update element properly on id change
* Fixed #9224 - CrudManager doesn't commit records on sync
* Fixed #9232 - getStartEndDatesFromRectangle not implemented for vertical mode
* Fixed #9241 - EventTooltip hides on left/right scroll with magic mouse while still over an event.

# 2.2.4 - 2019-09-09

## FEATURES / ENHANCEMENTS

* Added a customization guide about switching to Material Icons (Fixed #8969)
* New example that shows how to use React popup form as a custom event editor (partial fix of #8721)
* Added `triggerEvent` config for TimeSpanRecordContextMenuBase (inherited in ScheduleContextMenu, EventContextMenu), to set event which triggers context menu (Fixed #8757)
* Scheduler now fires `eventDragAbort` in case of an aborted drag operation (Fixed #9195)

## BUG FIXES

* Fixed #7809 - eventType field should update visibility of the other EventEditor fields
* Fixed #8658 - STYLING: Milestone layout demo renders incorrectly
* Fixed #9067 - Crud manager should support fetchOptions
* Fixed #9111 - Unexpected transitions for existing events when adding new events
* Fixed #9149 - Crash when dragging many tasks and some end up outside time axis, then dragged back
* Fixed #9150 - TimeAxis#round off for distant months
* Fixed #9151 - Event bars of multi week events not visible at extreme zoom in levels
* Fixed #9168 - Default image not shown after scrolling
* Fixed #9192 - Crash in vertical mode if calling store.endBatch

# 2.2.3 - 2019-08-27

## FEATURES / ENHANCEMENTS

* A new `resourceMargin` config was added to Scheduler, to allow more control over the event layout. Use it to specify
the margin between the first/last stacked/packed event within a resource and the resources edges (row or column
depending on mode). Defaults to use the configured `barMargin`, making it backwards compatible (Fixed #7888)
* A `readOnly` mode was added to the event editor (Fixed #8343)

## API CHANGES

* The default region for new columns has changed to be the first region (usually "locked") in Scheduler (Fixed #7423)

## BUG FIXES

* Fixed #6357 - Dependency creation tooltip prevents creating dependecies in some cases
* Fixed #7816 - Investigate performance when changing start/end dates
* Fixed #8093 - No need to redraw other rows on changes with eventLayout: 'none'
* Fixed #8764 - Partner timelines out of sync after zooming
* Fixed #8772 - ScheduleTooltip should reposition itself upon hover over it
* Fixed #8947 - VERTICAL: Scroll to date not functioning
* Fixed #8998 - ResourceTimeRanges not drawn after clearing and repopulating resource store
* Fixed #9004 - Resource images reloaded upon every Resource change
* Fixed #9017 - zoomchange event signature doesn't match doc
* Fixed #9032 - Adding event when no rows to display fails with exception
* Fixed #9046 - Angular-N demos are broken
* Fixed #9073 - vue drag-from-grid demo cannot be built with yarn
* Fixed #9090 - Resource images reloaded when resource column width changes
* Fixed #9098 - Warn users if scrollEventIntoView is not possible
* Fixed #9105 - STYLING: Change major tick column lines to use Grid's cell border color, minor tick lines slightly faded
* Fixed #9112 - Crash when modifying number of resources in bigdataset demo
* Fixed #9115 - Timerange header position is incorrect after scroll
* Fixed #9120 - Vertical scheduler throws exception when autoHeight is true
* Fixed #9127 - ResourceInfoColumn.validNames null disallows all names

# 2.2.2 - 2019-08-15

## FEATURES / ENHANCEMENTS

* Support for dragging multiple events at once was added, check it out in the `dragselection` demo (Fixed #8289)
* New Ext Scheduler to Bryntum Scheduler migration guide (Fixed #8595)

## BUG FIXES

* Fixed #7697 - Milestone position wrong in Custom Event Styling demo
* Fixed #8456 - Dependencies feature not working in nested events demo
* Fixed #8722 - No context menu shown when dependencies initialized as disabled or get disabled
* Fixed #8842 - beforeclose event not fired consistently for EventEditor
* Fixed #8939 - HeaderContextMenu range setting does not handle sub-day ticks.
* Fixed #8965 - Resource time ranges missing after filtering + zooming
* Fixed #8972 - Crash in vertical mode if a resource has no name defined
* Fixed #8994 - Advanced Angular demo (angular 8) fails to run production build
* Fixed #9009 - Dependency terminals visible after event resize with 'allowCreate' set to false

# 2.2.1 - 2019-07-24

## BUG FIXES

* Fixed #8730 - Dependencies are not redrawn after change
* Fixed #8877 - Crash in Tasks demo when typing arrow right on an event
* Fixed #8893 - PHP demo: doesn't save changes for newly created events
* Fixed #8894 - PHP demo: fails when try to edit an event after another is created
* Fixed #8923 - Child nodes not shown for newly added resource in a tree
* Fixed #8933 - Vue trial demos don't work in IE11
* Fixed #8942 - Crash when starting vertical mode demo on touch device
* Fixed #8943 - Crash when dragging newly created event
* Fixed #8944 - Crash when clicking next arrow in start date field of date range menu
* Fixed #8946 - VERTICAL: Resizing small event starts both resize + drag

# 2.2.0 - 2019-07-19

## FEATURES / ENHANCEMENTS

* New vertical rendering mode added showing resources on the horizontal axis and time on the vertical axis. The vertical mode compatible with most Scheduler features, be sure to check out the new `vertical` demo (Fixed #7504)
* New integration example Filtering Scheduler for React with TypeScript (Fixed #7408)
* Scheduler now supports zooming by dragging a range in the time axis header. Use the new HeaderZoom feature to enable
this behavior (Fixed #8747)
* Added a `resourceImagePath` to Scheduler, for shared usage by features that displays resource miniatures (such as
ResourceInformationColumn and the header in vertical mode)
* BREAKING: The Bryntum Scheduler wrapper for React and Angular has been rewritten to support passing different values
to features and config options with same names. Property names must be now suffixed with `Feature` to differentiate
features and config options, for example `timeRangesFeature`. In this example, `timeRangesFeature` would be propagated
to Scheduler features and `timeRanges` property would go to Scheduler itself.

## API CHANGES

* DEPRECATED: ResourceInfoColumns `imagePath` and `defaultImageName` configs was deprecated in favour of the new
`resourceImagePath` and `defaultResourceImageName` configs on Scheduler
* DEPRECATED: Scheduler's `tickWidth` property is deprecated, it is
called `tickSize` now

## KNOWN ISSUES

* Vue framework integration demos don't work in IE11 with the Scheduler trial distribution (work fine with full distribution though)

## BUG FIXES

* Fixed #8694 - Touch drag on events should only start after a small delay
* Fixed #8736 - nonWorkingTime feature highlights wrong zones when scheduler shows only working time
* Fixed #8867 - React drag onto tasks demo in full screen
* Fixed #8873 - VUE Localization demo: Locales are hardcoded
* Fixed #8878 - Specifying listeners for event editor breaks drag create feature and tooltip
* Fixed #8918 - ResourceTimeRanges not rendered when filtering tasks

# 2.1.3 - 2019-07-04

## FEATURES / ENHANCEMENTS

* The integration guides for Angular, React and Vue have been updated to reflect the latest versions of our examples and wrappers.

## BUG FIXES

* Fixed #8746 - Drag and drop breaks row rendering when the view is scrolled and drop makes events overlapped
* Fixed #8750 - Scheduler shouldn't fire beforeEventAdd event if eventEdit feature exists
* Fixed #8804 - Error / warnings in console of web components demo
* Fixed #8818 - PHP demo: creating a new event fails
* Fixed #8819 - PHP demo: changing assignment to a different resource duplicates the event
* Fixed #8843 - Drag between schedulers: Bottom scheduler header bug
* Fixed #8868 - Crash when zooming in narrow screensize
* Fixed #8871 - Exception thrown when removing event under mouse pointer

# 2.1.2 - 2019-06-27

## BUG FIXES

* Fixed #8667 - GroupSummary sometimes not rendering
* Fixed #8705 - Not possible to disable dependency creation
* Fixed #8719 - Clean up public configs that were removed in 2.1 release (showAddEventInContextMenu,
showRemoveEventInContextMenu, showUnassignEventInContextMenu)
* Fixed #8720 - REGRESSION: readOnly mode should disable default context menu items
* Fixed #8726 - DependencyEdit editDependency crashes when called programmatically
* Fixed #8761 - Grid vertical scroll height not updated after event add
* Fixed #8762 - Time range elements are sized incorrectly when zooming out

# 2.1.1 - 2019-06-14

## BUG FIXES

* Unfortunately we broke event animations in 2.1.0, this release re-enables them

# 2.1.0 - 2019-06-12

## FEATURES / ENHANCEMENTS

* Bumped built in FontAwesome to version 5.8.2
* Demos now have a built in code editor that allows you to edit their code (Chrome only) and CSS (Fixed #7210)
* Scheduler now supports selecting multiple events using drag drop (Fixed #8647)
* Scheduler now has a new SimpleEventEdit feature for editing the name of an event (Fixed #8648)
* Multiple new Angular demos added, see the `examples/angular` folder

## API CHANGES

* The `cls` property of `Scheduler.model.Event` is now an instance of `Common.helper.util.DomClassList`. Code which
uses it as a string will continue to work as the class has a `toString` inplementation, and the the `set Cls` setter
will promote incoming strings. But using the `DomClassList` API allows easy adding and removal of individual CSS
classes, easy testing for presence of a CSS class and more accurate comparisons of two Events' classes. The
`DomClassList#isEqual` method will work regardless of the _order_ that class names were added.
* Scheduler repaints dependencies asynchronously when dependency, assignment or event is changed. Use
`dependenciesDrawn` event to know when dependency lines are actually painted. `draw`, `drawDependency` and
`drawForEvent` are still synchronous.
* *BREAKING* Context menu Features are configured in a slightly different way in this version. If you have used the
`extraItems` or `processItems` options to change the contents of the shown menu, this code must be updated. Instead of
using `extraItems`, use `items`.

  The `items` config is an *`Object`* rather than an array. The property values are your new submenu configs, and the
  property name is the menu item name. In this way, you may add new items easily, but also, you may override the
  configuration of the default menu items that we provide.

  The default menu items now all have documented names (see the `defaultItems` config of the Feature), so you may apply
  config objects which override default config. To remove a provided default completely, specify the config value as
  `false`.

  This means that the various `showXxxxxxxInContextMenu` configs in the Scheduler are now ineffective. Simply use for
  example, `items : { deleteEvent : false }` to remove a provided item by name.

  `processItems` now recieves its `items` parameter as an `Object`, so finding predefined named menu items to mutate is
  easier. Adding your own entails adding a new named config object. Use the `weight` config to affect the menu item
  order. Provided items are `weight : 0`. Weight values may be negative to cause your new items to gravitate to the top.
* DEPRECATED: EventEdit's `extraWidgets` config was deprecated and will be removed in a future version. Please use
`extraItems` instead.
* BREAKING: EventSelection#deselectEvent now always maintains current selected events. (Fixed #8646)

## BUG FIXES

* Fixed #8063 - Drag resize ignores allowOverlap set to false
* Fixed #8205 - Dependencies can be rendered wrong for out of view events/tasks
* Fixed #8245 - Aborting task drag with ESC does not redraw dependency
* Fixed #8258 - Scheduler/examples/multiassign-with-dependencies/ throws error when dragging event and mouse moves over splitter
* Fixed #8380 - Non working time should highlight header time axis cells
* Fixed #8393 - CrudManager tries to sync invalid record
* Fixed #8544 – React: drag from grid freeze bug
* Fixed #8546 - scrollEventIntoView/scrollResourceEventIntoView should focus event element
* Fixed #8584 - ColumnLines feature misrendering
* Fixed #8600 - Zoom to fit not functioning correctly
* Fixed #8601 - Nested demo: nested event styles
* Fixed #8657 - Presets should have column lines defined for the lowest header level by default
* Fixed #8663 - Rendering broken in drag from grid demo

# 2.0.3 - 2019-05-23

## FEATURES / ENHANCEMENTS

* EventDrag feature can now be programmatically disabled

## API CHANGES

* CrudManager would previously when used with a tree store erroneously append new records from the backend without
specified `parentId` to the first record in the store, whereas it now will append them to the root.

## BUG FIXES

* Fixed #7561 - Should be able to use Grid & Scheduler & Gantt bundles on the same page
* Fixed #8041 - Normal header is not correctly stretched inside flex layout
* Fixed #8350 - Pan feature should also scroll the view by clicking on an event when drag and drop is disabled
* Fixed #8369 - ResourceInfoColumn should show default image if loading fails
* Fixed #8392 - 'cls' CSS class not added to rendered dependency
* Fixed #8398 - Event not selected if clicking the resize handle
* Fixed #8403 - Workingtime demo: Drag create out the right side of the time axis
* Fixed #8411 - Scheduler redrawn twice on EventStore dataset
* Fixed #8431 - Drag between schedulers demo not working with mobile device
* Fixed #8484 - New events not saved in CrudManager demo
* Fixed #8487 - Unchanged events in row are animated upon event add

# 2.0.2 - 2019-05-10

## FEATURES / ENHANCEMENTS

* Scheduler now only redraws affected rows if events change, greatly speeding up cases where a change does not affect
the height of the row (Fixed #8303)
* Labels for TimeRanges are now rendered in the time axis header to not be covered by task elements in the timeline
(`showHeaderElements` config of the feature switched to `true` by default).
* New initial animation 'zoom-in' added
* Animations demo extended to showcase initial animations, also includes a custom animation

## API CHANGES

* Dependency hover and creation tooltips can now be enabled separately (`showTooltip` vs `showCreationTooltip`).

## BUG FIXES

* Fixed #7496 - Allow aborting event resize with ESC
* Fixed #7810 - Filterable timeaxis doesn't work with DAY shift unit
* Fixed #7968 - zoomToSpan should take centerDate config into account
* Fixed #8069 - Provide public timeRanges property on CrudManager
* Fixed #8307 - Context menu should work on whole scheduling area
* Fixed #8319 - Current timeline header element not initially shown
* Fixed #8337 - Subclasses of TimeRanges remove each others elements
* Fixed #8346 - TimeRange with startDate == endDate not rendered properly
* Fixed #8355 - Selection of next event upon deletion bugged by implementation of non working time
* Fixed #8365 - Event style not cleaned up properly on reuse

# 2.0.1 - 2019-05-03

## BUG FIXES

* Fixed #7906 - RoughJS demo not running in IE11
* Fixed #7932 - Crash if timeRange lacks start or end date
* Fixed #7947 - Dependencies feature sets up its store listeners too early.
* Fixed #7956 - EventNavigation fires an incorrect event signature for the navigate event
* Fixed #7974 - Having leaf item at the top of the tree makes the whole tree broken
* Fixed #7976 - Should not highlight timeaxis column on hover
* Fixed #7977 - Dependency drag terminals wrong colour after mouseup of event resize drag
* Fixed #7981 - When moving an event into the far future, dep lines are redrawn wrong and not kept up to date
* Fixed #7989 - Timeaxis filter field width overflows its container
* Fixed #7997 - Mouseout of event through dep terminal leaves resizing class present on inner.
* Fixed #8005 - Resource timeranges not rendering correctly with eventLayout 'none'
* Fixed #8006 - Investigate poor scrolling performance on partnered schedulers with many events
* Fixed #8041 - Normal header is not correctly stretched inside flex layout
* Fixed #8046 - "event(s)" in ResourceInfoColumn template should be localized
* Fixed #8066 - Working time demo: Column lines for middle day viewpreset out of sync
* Fixed #8084 - Scheduler view not reacting to 'refresh' event after endBatch()
* Fixed #8128 - getDateFromDomEvent doesn't work with non-local mouse events
* Fixed #8144 - Header menu items duplicated if using multiple instances of TimeRanges
* Fixed #8161 - TimeRanges doesn't work in React Typescript demo
* Fixed #8221 - Drag proxy misplaced if page is scrolled
* Fixed #8263 - Event selection should be cleared if drag starts without CTRL pressed

# 2.0.0 - 2019-03-28

## FEATURES / ENHANCEMENTS

* New demo using WebSockets added (client + server)
* New demo using Ionic added (Fixed #7426)
* New demo showing integration to the Vuestic web app (IE11 is not supported) (Fixed #7831)
* New demo showing cascading combos in Event Editor (Fixed #7755)
* New demo using Rough.js for custom sketched event styling added (Fixed #7493)
* Demos ported to vue: drag-from-grid, drag-onto-tasks (TypeScript, Fixed #756)
* Included a new default theme called "stockholm"
* Added animation for first display of events (Fixed #7550)
* Scheduler now supports filtering the time axis ticks and/or defining a custom tick generator to create a
non-continuous time axis. Try the new `timeaxis` demo to see it in action (Fixed #6597)
* Added support for specifying working days and hours, which will be used to either filter the time axis or stretch
the rendered events depending on zoom level (Fixed #7536).
* Removed flatpickr as our time picker for `TimeField` and replaced with our own implementation (Fixed #7396)
* Made it possible to manipulate items of HeaderContextMenu before show (Fixed #7544)
* Added support for using dependencies with multi assigned events (Fixed #6749)
* Added API to show context menu for event record (Fixed #7621)
* Scheduler now supports multiple regions for columns, as opposed to only two previously (locked and normal). Check out the new
columns demo to see how it works (Fixed #7642)
* Add support for dashed and dotted lines to the ColumnLines feature (Fixed #7653)
* Events can now be split in pieces using the new `split` API. Demonstrated in tooltips demo and eventcontextmenu demo.
* Angular demos no longer use `autoHeight`, instead they get their height from CSS as most of other demos do. This makes
code from them a bit easier to reuse outside of our demos (Fixed #7767)
* EventEdit feature now triggers a `beforeEventEditShow` event on scheduler after constructing the editor and loading the
event, but before being shown. Allows you to hook in to for example filter the resources combo (Fixed #7520)
* Added a `style` field to the `TimeSpan` model. Can be used to apply custom styling to events, time ranges and resource time
ranges (Fixed #7596)
* New `getVisibleDateRange()` API added (Fixed #7876)
* The CrudManager `AjaxTransport` mixin now uses our internal AjaxHelper and the fetch API for transport, https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## API CHANGES

* Previously private field accessors on the event editor feature were made public (nameField, resourceField etc.) to for
example allow manipulation of shown resources when displaying the editor (Fixed #7519)
* TimeAxisViewModel was made public, it handles mapping between the data based time axis and the UI. You can access it
using `scheduler.timeAxisViewModel` to find out the date at a specific pixel etc.
* EventContextMenu#onElementContextMenu is private now, use EventContextMenu#showContextMenuFor instead
* 'beforeEventDrag' is no longer fired on mousedown, but on the first mousemove following a mousedown (Fixed #7723)
* [BREAKING] The `renderEventsAsContainers` has been removed, and the rendering simplified. All Events are rendered inside their
own wrapper element. _This will only affect you if you have custom styling applying to event elements and were not using
`renderEventsAsContainers: true`_
* [BREAKING] TimeField's and DateField's `pickerFormat` config was removed in favour of using `format` also for the picker
* [BREAKING] EventEditors resource field was renamed from `resourceIdField` -> `resourceField` to reflect the fact that it
might involve multi assignment (Fixed #7518)
* [BREAKING] Scheduler now renders it contents on `paint` instead of on `render`, to allow it to initialize correct when
embedded in tab panels and similar. Because of this change, the `render` event was removed.
* [BREAKING] `idField` config was removed from `Store`, it was not used in the codebase and did not work as intended. The
config is still available and working on `Model`, set it on your subclass (`MyModelClass.idField = 'MyId'`). If you
really want to remap id to another field in your data without subclassing `Model` you can still do it using the `fields`
config on `Store`: `new Store({ fields : [{ name : 'id', dataSource : 'MyId' }] });`

## BUG FIXES

* Fixed #7422 - Cannot read property 'atob' of undefined
* Fixed #7483 - finalize method called twice when cancelling event resizing
* Fixed #7500 - Crash in CrudManager demo if making changes while sync is in progress
* Fixed #7599 - Event rendering in month is a bit off
* Fixed #7669 - TimeField in EventEditor left/right buttons should use same increment as current viewPreset timeResolution
* Fixed #7675 - EditBase should check field validity in a more precise manner
* Fixed #7719 - Assignment cannot be moved correctly if it overlaps with itself and allowOverlap is false
* Fixed #7708 - ScheduleTip and EventTip disabled after dragging en event out of view
* Fixed #7723 - 'beforeEventDrag' is fired on mousedown event
* Fixed #7726 - DOCS: Complete list of defaults
* Fixed #7732 - Event selection lost after loading new dataset which contains previously selected event id
* Fixed #7733 - Old selected events not cleaned up when a dataset changes
* Fixed #7735 - TimeSpan.normalize should respect mapping
* Fixed #7758 - ViewPreset headerConfig "align" has no effect
* Fixed #7760 - ViewPreset headerConfig "headerCls" has no effect
* Fixed #7761 - Some feature methods, exposed to scheduler, are not typed properly
* Fixed #7770 - Events not deleted when parent tree node deleted
* Fixed #7802 - Incorrect dates on the timeaxis when resolution unit is month
* Fixed #7810 - Filterable timeaxis doesn't work with DAY shift unit
* Fixed #7863 - Crash after drag drop when scrolled to bottom and replacing events dataset
* Fixed #7869 - Setting showCurrentTimeLine to false doesn't work

# 1.2.5 - 2019-02-26

## FEATURES / ENHANCEMENTS

* Updated the React guide to reflect the change of bundle used in the demo (it uses scheduler.module.transpiled.js to
allow the demo to run in IE11)

## BUG FIXES

* Renamed event relay prefix in the vue wrapper to avoid naming collisions (eventStore -> events etc.)
* Fixed react_typescript build

# 1.2.4 - 2019-02-19

## FEATURES / ENHANCEMENTS

* Updated `readme.md` to better describe the projects folder structure and different included bundles.

## BUG FIXES

* Fixed #7560 - Crash in GroupSummary demo
* Fixed #7629 - Error when building Angular demos

# 1.2.3 - 2019-02-14

## FEATURES / ENHANCEMENTS

* Added a date picker to EventEditor, Angular, and Vue demos (Fixed #7584)

## BUG FIXES

* Fixed #7547 - STYLING: Wrong selection style for group header rows
* Fixed #7563 - Scroll reset in partners demo
* Fixed #7590 - STYLING: Headers missing padding in IE11
* Fixed #7608 - react_build demo is broken
* Fixed #7609 - passStartEndParameters config has no effect
* Fixed #7619 - Dblclicking a summary row should not create a new event
* Fixed #7620 - Incorrect position for events below collapsed group in groupsummary demo

# 1.2.2 - 2019-01-28

## API CHANGES

* ANGULAR: The Scheduler component was previously relaying events from EventStore and ResourceStore by prefixing them
with `eventStore` and `resourceStore`, making it possible to listen for for example `eventStoreAdd` or
`resourceStoreRemove`. The prefix was causing naming collisions internally and have now been changed to `events`
and `resources` -> `eventsAdd` / `resourcesRemove`. In case you rely on this in your code, you need to rename to match
the new pattern.

## BUG FIXES

* Fixed #7529 - After a drag on empty calendar spot, the scheduleClick event is no more fired
* Fixed #7541 - Crash when updating rendered timerange to be nonrendered
* Fixed #7558 - Error during dragdrop in angular demo
* Fixed #7555 - Drag from grid example throws error

# 1.2.1 - 2019-01-17

## API CHANGES

* The behaviour when setting `startDate` after initialization on Scheduler has changed from modifying the length of the
displayed time range to instead shift it backwards or forwards, keeping its duration. `endDate` still modifies the
length of the time range. To allow control over this behaviour `setStartDate` and `setEndDate` methods have been added
to the Scheduler, both accepting a `keepDuration` flag (Fixed #7410)

## BUG FIXES

* Fixed #6576 - AjaxTransport does not honour headers config
* Fixed #7194 - Crash when exporting schedule with grouped column
* Fixed #7354 - Angular demo does't work in IE11
* Fixed #7370 - [EDGE] Investigate Angular + trial bundle
* Fixed #7400 - Drag between schedulers demo: Cannot read property 'isMilestone' of undefined
* Fixed #7402 - Bundle aliases for angular demos not updated
* Fixed #7409 - React Typescript demo doesn't work in IE11
* Fixed #7410 - Scheduler fails when set start date greater than end date
* Fixed #7413 - Crash when creating new event in multi-assignment mode
* Fixed #7421 - Unexpected animation after event add
* Fixed #7440 - Crash in WebComponents demo after drag drop
* Fixed #7441 - Crash when updating resourceTimeRange of non-existing resource
* Fixed #7443 - Scroll bars showing/hiding indefinitely
* Fixed #7444 - Crash when deleting new multiassigned task
* Fixed #7448 - Crash in drag-between-schedulers demo
* Fixed #7452 - Trial demos do not work in Edge
* Fixed #7466 - Can't access dropped record when dragging between schedulers
* Fixed #7482 - Should not fire 'eventclick' after resizing
* Fixed #7485 - allowOverlap is not taken into account when dragging from another Scheduler
* Fixed #7492 - Column lines do not match headers if autoAdjustTimeAxis is false
* Fixed #7495 - End dates mismatch in resize tooltip
* Fixed #7502 - Timeaxis rendering not consistent in drag from grid demo
* Fixed #7503 - Drag drop breaks if event start is aligned with viewport left edge
* Fixed #7511 - Group summary rows visible in resource combo of event editor
* Fixed #7516 - Typings generation misses `implements` if no `extends`

# 1.2.0 - 2018-12-19

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* React wrapper changed to use `shouldComponentUpdate()` to prevent unnecessary re-renders
* Added React + TypeScript demo (Fixed #7283)
* Full TypeScript typings included as `build/scheduler.d.ts`. Typings define
module `bryntum-scheduler` to avoid possible name collisions, so we had to
also rename import in the angular demo.
* Vue wrapper now adds watchers for all props
* New demo using Vue CLI added (Fixed #7121)
* New feature + demo ResourceTimeRanges added. Renders time ranges per resource, displayed behind events (Fixed #7176)
* Built in version of FontAwesome was bumped to 5.5.0
* New demo showing drag drop of tasks between two Scheduler instances (Fixed #7069)
* Improved the "drag from grid" demo, adding new behavior to automatically reschedule overlapping tasks (Fixed #7355)
* Added a new guide on how to listen for events (Fixed #7196)
* Docs updated to state that locales should be included before the umd bundle to have effect (Fixed #7205)
* Scheduler.feature.HeaderContextMenu now accepts an `extraItems` array to add extra items to the header context menu.
* The context menu for events now accepts a `processItems` function that allows processing of the items before the menu
is shown (Fixed #6887)
* A context menu for empty parts of the schedule was added, ScheduleContextMenu (Fixed #6724)
* Built in version of FontAwesome was bumped to 5.5.0

## API CHANGES

* BREAKING: AssignmentModels `getEvent()`, `getResource()`, `getEventName()` and `getResourceName()` removed in favor of
properties `event`, `resource`, `eventName` and `resourceName`.
* BREAKING: TimeRanges `rangeCls` and `lineCls` were made private
* `DependencyStore#getEventIncomingDependencies` renamed to `getEventpredecessors`
* `DependencyStore#getEventOutgoingDependencies` renamed to `getEventsuccessors`
* The `resourceRecord` parameter of the Scheduler.feature.EventEdit#beforeeventsave event object was deprecated in favor of `resourceRecords` to better
support multiple assignments

## BUG FIXES

* Fixed #7195 - Production build broken in angular demo
* Fixed #7224 - Store filter is not getting applied again when it's supposed to
* Fixed #7243 - Dependency lines misplaced
* Fixed #7246 - Salesforce demo doesn't work
* Fixed #7259 - React demo doesn't work in IE11
* Fixed #7267 - Dependency Tooltip width increases while moving (Firefox only)
* Fixed #7293 - Event is not visible in monthAndYear preset if end date is out of scheduler timespan
* Fixed #7307 - Dragging event to the right makes it disappear
* Fixed #7311 - Angular demo does not work in Edge
* Fixed #7315 - UI not refreshed when finalizing resize flow with `false` to cancel it
* Fixed #7316 - EventEdit endTimeConfig has no effect
* Fixed #7324 - Crash when deleting event in multassign demo
* Fixed #7325 - Angular production buid doesn't work with trial sources
* Fixed #7344 - Setting a new dataset crashes when using AssignmentStore
* Fixed #7346 - react_build demo is missing .babelrc config

# 1.1.2 - 2018-11-23

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* EventTooltip docs updated to show that you can use Tooltip configs to affect the tooltip

## API CHANGES

* CSS class `b-sch-minuteIndicator` renamed to `b-sch-minute-indicator`
* CSS class `b-sch-hourIndicator` renamed to `b-sch-hour-indicator`

## BUG FIXES

* Fixed #7153 - Adding 100 records in a loop does not extend the scroll range of the grid.
* Fixed #7167 - End date icon inconsistent with the date it's shown next to
* Fixed #7174 - record.imageUrl should have a priority and stay as it is
* Fixed #7185 - Readding a removed resource renders events after scroll
* Fixed #7191 - STYLING: Wrong color in dark theme for nbr events text in resource info column
* Fixed #7217 - group summary demo misrendering

# 1.1.1 - 2018-11-16

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* New drag drop demo showing how to drag objects from outside the scheduler onto scheduled tasks (fixed #7139).
* The Angular wrapper now includes @Input for `eventBodyTemplate`, `crudManager`, `eventStore`, `resourceStore`,
`assignmentStore` and `dependencyStore`
* New pan feature added (Fixed #6665)
* New `drag-between-schedulers` demo showing how you can drag and drop tasks between multiple Schedulers

## API CHANGES

* Calling TimeSpan#startDate setter and TimeSpan#setStartDate will now move the span in time as opposed to earlier where it would modify the duration of the event.

## BUG FIXES

* Fixed #7003 - Vue wrapper naming collision
* Fixed #7120 - Cannot use ids containing "-" on events or resources
* Fixed #7125 - Export feature doesn't export correct data by default
* Fixed #7129 - Crash when localizing time units
* Fixed #7130 - Web Components demo throws 404s
* Fixed #7132 - Setting start date > end date results in negative duration
* Fixed #7136 - Duration field should spin on up/down keys
* Fixed #7143 - Strange scroller behavior in dragfromgrid demo
* Fixed #7147 - When record is removed from context menu focus should move to next event

# 1.1.0 - 2018-11-09

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* React demo bumped to latest react and styling improved
* Built in FontAwesome version bumped to 5.4.1, scope changed from .fa -> .b-fa to not affect icons outside of our widgets
* New `tooltips` demo showing how to customize the event tooltip
* New `validation` demo showing how to validate drag drop & resizing operations
* New Export to Excel demo (Fixed #6961)

## API CHANGES
* `Scheduler` has a new `parter` config which pairs the `Scheduler` with the passed `Scheduler`, sharing the
`TimeAxis`, and synchronizing the horizontal scroll positions.
* Scheduler now defaults to remove the event when removing its last assignment. This behaviour can be changed using the
`removeUnassignedEvent` config.
* Scheduler has a new `triggerSelectionChangeOnRemove` config that determines if `eventSelectionChange` should trigger
or not when removing a selected event.
* BREAKING: ViewPresets property `timeColumnWidth` and related getters and setters was renamed to `tickWidth`.
`timeColumnWidth` can still be used for backwards compatibility, but if you are using a custom ViewPreset we recommend
that you rename to be future proof.
* BREAKING: EventDrag#validatorFn now receives the drag context in one context object (similar to dragCreate and eventResize features), instead of multiple params
* DEPRECATED: In the context object parameter (first param) of the EventResize#validatorFn, 'start' and 'end' were deprecated in favor of 'startDate' + 'endDate'.
* DEPRECATED: In the context object parameter (first param) of the EventDragCreate#validatorFn, 'start' and 'end' were deprecated in favor of 'startDate' + 'endDate'.
* DEPRECATED: In the `eventpartialresize` context object, the 'start' and 'end' were deprecated in favor of 'startDate' + 'endDate'.
* DEPRECATED: TimeSpan#shift method now has switched position of the `amount` and `unit` params (Fixed #7031)
* DEPRECATED: Scheduler#viewportresize event was deprecated in favor of #timelineviewportresize (Fixed #7046)
* BREAKING: In the SchedulerEventRendering#eventRenderer template method, the `columnIndex` property of the `detail` object was made private.
* BREAKING: In the SchedulerEventRendering#eventRenderer template method, the following properties of the `detail.tplData` object were made private: `start`, `end`, `startMs`, `endMs`, `startsOutsideView`, `endOutsideView`, `resourceId`, `resource`, `id` and `eventId`. A new `height` property was added to `tplData` which lets your read the event height.

## BUG FIXES

* Fixed #6098 - Scheduler may be partnered with another Scheduler to share TimeAxis and scroll position.
* Fixed #6720 - Schedule and timeaxis out of sync after calling scrollEventIntoView
* Fixed #6723 - Dependency lines for events which have been deleted reappear when the scheduler subgrid is scrolled.
* Fixed #6731 - Our CSS rules should be all scoped to apply inside .b-widget
* Fixed #6814 - Editing an event's startDate to make it outside of the rendered event zone doesn't hide the event.
* Fixed #6820 - Crash in filter demo when typing regex chars
* Fixed #6906 - Theme demo not rendering correctly
* Fixed #6980 - Maximum value violation warning seen in event editor
* Fixed #6990 - When resize triggers multiple events update, extra terminals got rendered into resized element, growing uncontrollably
* Fixed #7000 - Hardcoded z-index for focused event
* Fixed #7005 - Hover should not be triggered on events during drag create
* Fixed #7006 - Calling dependencyStore.removeAll() does not remove dependency lines from view
* Fixed #7009 - New dependency gets removed from the view on scroll
* Fixed #7019 - DST transition problem
* Fixed #7021 - Copy DST fix + test from ExtScheduler 6.x
* Fixed #7024 - Dependency lines are missing after zoom in/out
* Fixed #7029 - Selected event styling not working when using labels
* Fixed #7037 - Events rendered slightly off their start dates
* Fixed #7050 - EventEdit feature should pass false to extendTimeAxis option to scrollResourceEventIntoView
* Fixed #7048 - Scheduler: Drag/drop resizes task when task is small
* Fixed #7070 - Crash when assigning from unexisting resourceId back to valid resourceId
* Fixed #7072 - eventStore#removeAll doesn't refresh UI
* Fixed #7074 - Deleting row does not repaint events properly

# 1.0.4 - 2018-10-08

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* Angular demo improved: relays more events from the engine, added eventLayout config
* Vue demo improved: added more configs and improved styling
* Functions for shifting time in the time axis documented and exposed on Scheduler: `shift()`, `shiftNext()`, `shiftPrev()`
and `setTimespan()`. These functions are used in the timeresolution demo

## API CHANGES

## BUG FIXES

* Fixed #6770 - Loadmask not working when using crudManager
* Fixed #6803 - EventEditor setting end date/time does not adjust the duration field
* Fixed #6848 - Should create new record even if resource field is not shown in Editor
* Fixed #6852 - Hovered event has wrong z-index when dragging
* Fixed #6856 - "Container is not defined" in docs
* Fixed #6857 - Crash in docs when collapsing group
* Fixed #6860 - online webcomponents demo doesn't load polyfill for firefox
* Fixed #6871 - ExtraWidgets position is wrong in EventEdit feature
* Fixed #6889 - Missing APIs in docs
* Fixed #6912 - Changing event start time via typing should move the event

# 1.0.3 - 2018-10-01

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* Added a new demo - "Nested events"
* Added demos for Angular 1, 2, 4, 5 and 6

## API CHANGES

## BUG FIXES

* Fixed #6787 - Invalid drop should make no influence on event changing
* Fixed #6816 - Add polyfills to webcomponents demo to make it work in all browsers
* Fixed #6820 - Crash in filter demo when typing regex chars
* Fixed #6826 - Cache buster needed for docs app.js

# 1.0.2 - 2018-09-24

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

## API CHANGES

## BUG FIXES

* Fixed #6779 - Link to react_build demo gives 404
* Fixed #6783 - Date picker in header context menu produces inconsistent results
* Fixed #6788 - Event editor doesn't allow setting a start date greater than end date
* Fixed #6795 - Examples online do not work in edge
* Fixed #6798 - Scheduler doc 404 on Scheduler/column/ResourceInfoColumn
* Fixed #6801 - Grid vs Scheduler feature collision in docs
* Fixed #6808 - Locales broken in react demo

# 1.0.1 - 2018-09-20

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

## API CHANGES

## BUG FIXES

* Fixed #6706 - Modification date in guides restyled
* Fixed #6735 - Name not shown in newly added task
* Fixed #6774 - Enter key in an event editor triggers side effect

# 1.0.0 - 2018-09-13

* We're happy to announce the first v1.0.0 release of our new Scheduler component. The Scheduler is a modern and high performance scheduling UI component. Built from the ground up with pure javascript, supporting any framework you are already using (incl. React, Angular and Vue). Please see our website and documentation for a full presentation.

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* Multi assignment support added, see multiassign demo (#4460)

## API CHANGES

## BUG FIXES

# 1.0.0-rc1 - 2018-09-06
## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

## API CHANGES

## BUG FIXES

* Fixed #6682 - Drag drop not working on iPhone
* Fixed a bug that prevented dependencies from being redrawn when dragging events

# 1.0.0-beta7 - 2018-09-01
## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

## API CHANGES

## BUG FIXES

* Fixed an obfuscation bug related to event selection

# 1.0.0-beta6 - 2018-08-30
* We're happy to announce the v1.0.0-beta6 release of our new Scheduler component. The Scheduler is a modern and high performance scheduling UI component. Built from the ground up with pure javascript, supporting any framework you are already using (incl. React, Angular and Vue). Please see our website and documentation for a full presentation.

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* scheduler.modules.js bundle and related demos are now included in trial

## API CHANGES

## BUG FIXES

* Fixed #6638 - Create angular demo for trial bundle
* Fixed #6660 - Demos should shown "unknown" generic image for names not known

# 1.0.0-beta5 - 2018-08-24
* We're happy to announce the v1.0.0-beta5 release of our new Scheduler component. The Scheduler is a modern and high performance scheduling UI component. Built from the ground up with pure javascript, supporting any framework you are already using (incl. React, Angular and Vue). Please see our website and documentation for a full presentation.
* This release keeps scheduler up to date with recent changes in Bryntum Grid, on which it is based.

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

## API CHANGES

## BUG FIXES

# 1.0.0-beta4 - 2018-08-21
* We're happy to announce the v1.0.0-beta4 release of our new Scheduler component. The Scheduler is a modern and high performance scheduling UI component. Built from the ground up with pure javascript, supporting any framework you are already using (incl. React, Angular and Vue). Please see our website and documentation for a full presentation.

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

* Fixed #6448 - Localization guide must show how to localize all date formats

## API CHANGES

## BUG FIXES

* Fixed #6605 - Cannot read property 'start' of null
* Fixed #6607 - Crash in column header context menu date picker
* extjsmodern demo fixed in IE11
* Prevented some dependencies from being drawn twice

# 1.0.0-beta3 - 2018-08-01

* We're happy to announce the v1.0.0-beta3 release of our new Scheduler component. The Scheduler is a modern and high performance scheduling UI component. Built from the ground up with pure javascript, supporting any framework you are already using (incl. React, Angular and Vue). Please see our website and documentation for a full presentation.
* The tests in this version has been updated to work with Siesta 5.0.

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

## API CHANGES

## BUG FIXES

* Fixed #6528 - Dependency rendering broken when scrolling

# 1.0.0-beta2 - 2018-07-31

* We're happy to announce the first v1.0.0-beta2 release of our new Scheduler component. The Scheduler is a modern and high performance scheduling UI component. Built from the ground up with pure javascript, supporting any framework you are already using (incl. React, Angular and Vue). Please see our website and documentation for a full presentation.

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

## API CHANGES

## BUG FIXES

* Fixed #6483 - Clock image in tooltip is not fully round
* Fixed #6484 - Tooltip shown for deleted event video
* Fixed #6487 - Event Editor doesn’t fit text of date fields
* Fixed #6488 - Time resolution demo, snap checkbox not vertically aligned with sliders
* Fixed #6489 - Summary demo, wrong Milestone outline

# 1.0.0-alpha2 - 2018-07-02

## KNOWN ISSUES

## FEATURES / ENHANCEMENTS

## API CHANGES

## BUG FIXES

* Group header z-index and background adjusted (fixes #6459)
* Adjusted EventEditor date field widths (fixes #6487)
* Milestone outline styling fixed for event style "line" (fixes #6489)
