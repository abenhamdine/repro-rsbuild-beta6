export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  LocalDateTime: { input: any; output: any; }
  PositiveFloat: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
  Time: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** Absence */
export type Abs = {
  __typename: 'Abs';
  /**
   * automatique selon les dates = 1
   * saisir le nombre = 2
   */
  abs_calcul_type: Scalars['Int']['output'];
  /** Date de début */
  abs_datedebut: Scalars['Date']['output'];
  /** Commence l'après-midi  */
  abs_datedebut_commence_aprem: Scalars['Boolean']['output'];
  /** Date de fin */
  abs_datefin: Scalars['Date']['output'];
  /** Se termine le matin */
  abs_datefin_finit_matin: Scalars['Boolean']['output'];
  abs_est_carence: Maybe<Scalars['Boolean']['output']>;
  abs_id: Scalars['Int']['output'];
  abs_id_externe: Maybe<Scalars['String']['output']>;
  abs_nb: Maybe<Scalars['Float']['output']>;
  abs_origine: Scalars['Int']['output'];
  /** Arrêt */
  art_id: Maybe<Scalars['Int']['output']>;
  /** Salarié */
  cmsal_id: Maybe<Scalars['Int']['output']>;
  /** Contrat */
  cnt_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** #Do not exists in Abs */
  sal: Maybe<Sal>;
  /** Salarié */
  sal_id: Scalars['Int']['output'];
  /** Type d'absence  */
  tab_id: Scalars['Int']['output'];
  /**
   * En jours = 2
   * En heures = 1
   */
  uab_id: Scalars['Int']['output'];
  wdm_id: Maybe<Scalars['Int']['output']>;
};

export type Absence = {
  __typename: 'Absence';
  datedebut: Scalars['Date']['output'];
  datefin: Scalars['Date']['output'];
  datefin_matin: Scalars['Boolean']['output'];
  debut_aprem: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  sal_name: Scalars['String']['output'];
  sal_type: Scalars['String']['output'];
  salarie_id: Scalars['Int']['output'];
  statut_demande: Scalars['String']['output'];
  statut_id: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type AbsencePortailExterne = {
  __typename: 'AbsencePortailExterne';
  absExternalId: Maybe<Scalars['Int']['output']>;
  absExterneDesc: Scalars['String']['output'];
  basculableEnPaie: Maybe<Scalars['Boolean']['output']>;
  cntDescMatched: Maybe<Scalars['String']['output']>;
  cntIdMatched: Maybe<Scalars['Int']['output']>;
  commenceAprem: Scalars['Boolean']['output'];
  dateDebut: Scalars['Date']['output'];
  dateDebutContrat: Maybe<Scalars['Date']['output']>;
  dateFin: Scalars['Date']['output'];
  employeeNumber: Maybe<Scalars['String']['output']>;
  finitMatin: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isAlreadyImported: Maybe<Scalars['Boolean']['output']>;
  isImportable: Maybe<Scalars['Boolean']['output']>;
  leaveAccountId: Scalars['Int']['output'];
  leaveAccountName: Scalars['String']['output'];
  leavePeriodId: Scalars['Int']['output'];
  ownerId: Scalars['Int']['output'];
  salDescMatched: Maybe<Scalars['String']['output']>;
  salIdMatched: Maybe<Scalars['Int']['output']>;
  tabDescMatched: Maybe<Scalars['String']['output']>;
  tabIdMatched: Maybe<Scalars['Int']['output']>;
  unite: Scalars['Int']['output'];
  userBirthDate: Maybe<Scalars['Date']['output']>;
  userEmail: Scalars['String']['output'];
  userFirstName: Scalars['String']['output'];
  userLastName: Scalars['String']['output'];
};

export enum AbsenceState {
  EN_ATTENTE = 'EN_ATTENTE',
  PAIE = 'PAIE',
  VALIDEE = 'VALIDEE'
}

export type Acd = {
  __typename: 'Acd';
  /** date début accès */
  acd_date_debut: Maybe<Scalars['Date']['output']>;
  /** date fin accès */
  acd_date_fin: Maybe<Scalars['Date']['output']>;
  /** id du dossier(soit pad_id) */
  acd_dossiermodule_id: Maybe<Scalars['Int']['output']>;
  acd_id: Scalars['Int']['output'];
  acd_mod_code: Scalars['String']['output'];
  /**
   * #Do not exists in Acd
   *     accès roles dans le dossier(salarié / manager / employeur...)
   */
  auis: Maybe<Array<Aui>>;
  id: Scalars['ID']['output'];
  /** id de l'utilisateur */
  uti_id: Maybe<Scalars['Int']['output']>;
};

export type Acrd = {
  __typename: 'Acrd';
  acrd_abs_gerer: Scalars['Boolean']['output'];
  acrd_branche_date_extension: Maybe<Scalars['Date']['output']>;
  acrd_branche_est_etendu: Maybe<Scalars['Boolean']['output']>;
  acrd_classif_gerer: Scalars['Boolean']['output'];
  acrd_classif_gerer_cat: Scalars['Boolean']['output'];
  acrd_classif_gerer_coef: Scalars['Boolean']['output'];
  acrd_classif_gerer_ech: Scalars['Boolean']['output'];
  acrd_classif_gerer_emprep: Scalars['Boolean']['output'];
  acrd_classif_gerer_fil: Scalars['Boolean']['output'];
  acrd_classif_gerer_niv: Scalars['Boolean']['output'];
  acrd_classif_gerer_pos: Scalars['Boolean']['output'];
  acrd_classif_gerer_valpoint: Scalars['Boolean']['output'];
  acrd_cp_type_gestion: Maybe<Scalars['Int']['output']>;
  acrd_date: Maybe<Scalars['Date']['output']>;
  /** #Do not exists in Acrd */
  acrd_desc: Maybe<Scalars['String']['output']>;
  acrd_emplois_gerer: Scalars['Boolean']['output'];
  acrd_id: Scalars['Int']['output'];
  acrd_lib: Scalars['String']['output'];
  acrd_niveau: Scalars['Int']['output'];
  acrd_notes: Maybe<Scalars['String']['output']>;
  acrd_periodesessai_gerer: Scalars['Boolean']['output'];
  acrd_profils_gerer: Scalars['Boolean']['output'];
  acrd_textes_gerer: Scalars['Boolean']['output'];
  acrd_url: Maybe<Scalars['String']['output']>;
  acrd_variables_gerer: Scalars['Boolean']['output'];
  ccn_id: Maybe<Scalars['Int']['output']>;
  eta_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  pad_id: Maybe<Scalars['Int']['output']>;
  peria_desc: Maybe<Scalars['String']['output']>;
};

export type AdditionalDocInfos = {
  __typename: 'AdditionalDocInfos';
  /** bul_ids et pas bul_id, car si le document représente un bulletin aggrégé on préfère pouvoir les identifier, dans le cas où le bulletin n'est pas agrégé l'array n'aura donc qu'un seul bul_id */
  bul_ids: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /**
   * 1 = bulletin de paie
   * 2 = bulletin epargne salariale
   */
  bul_nature: Maybe<Scalars['Int']['output']>;
  isBulAgg: Maybe<Scalars['Boolean']['output']>;
  /** Seul certains type de documents ont une peri liée tel que les bulletins */
  peri: Maybe<Scalars['Int']['output']>;
};

/** #Action d'une étape de paie */
export type Aeta = {
  __typename: 'Aeta';
  /**
   * Do not exist in Aeta
   * 3 tout les esais basculés, 2 = tout les esais validés, 1 = tout les esais ne sont pas à minimat validés
   */
  aetaStatusDesc: Maybe<Scalars['Int']['output']>;
  aeta_id: Scalars['Int']['output'];
  aeta_lib: Scalars['String']['output'];
  aeta_num_ordre: Scalars['Int']['output'];
  aeta_type: Scalars['Int']['output'];
  /** Signifie qu'au moins un livrable lié à l'aeta dans le mois est visible par l'employeur */
  atleastOneLivrableVisible: Maybe<Scalars['Boolean']['output']>;
  etap_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type Aff = {
  __typename: 'Aff';
  aff_datedebut: Maybe<Scalars['Date']['output']>;
  aff_datefin: Maybe<Scalars['Date']['output']>;
  aff_heure_embauche_defaut: Maybe<Scalars['String']['output']>;
  aff_heure_fin_defaut: Maybe<Scalars['String']['output']>;
  aff_id: Scalars['Int']['output'];
  aff_lib: Maybe<Scalars['String']['output']>;
  aff_lieu: Maybe<Scalars['String']['output']>;
  aff_ref: Maybe<Scalars['String']['output']>;
  aff_restreindre_uorgs_ouvertes: Scalars['Boolean']['output'];
  eta_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  pad_id: Scalars['Int']['output'];
};

export type Afod = {
  __typename: 'Afod';
  afod_datedebut: Scalars['Date']['output'];
  afod_datefin: Maybe<Scalars['Date']['output']>;
  afod_id: Scalars['Int']['output'];
  afod_notes: Maybe<Scalars['String']['output']>;
  afod_numaffil: Maybe<Scalars['String']['output']>;
  afod_peri_debut: Scalars['Int']['output'];
  afod_peri_fin: Maybe<Scalars['Int']['output']>;
  afod_periodicite_paiement: Scalars['Int']['output'];
  afod_type_paiement_dsn: Scalars['Int']['output'];
  bnqd_id: Maybe<Scalars['Int']['output']>;
  eta_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mdp_id: Maybe<Scalars['Int']['output']>;
  pad_id: Scalars['Int']['output'];
  /** Do not exists in Afod */
  rorg: Maybe<Rorg>;
  rorg_id: Maybe<Scalars['Int']['output']>;
};

export type AgentClient = {
  __typename: 'AgentClient';
  agt_id: Scalars['Int']['output'];
  agt_type_role: Scalars['Int']['output'];
  pdos_id: Scalars['Int']['output'];
  uti_nom: Scalars['String']['output'];
  uti_prenom: Scalars['String']['output'];
};

export type Agt = {
  __typename: 'Agt';
  agt_id: Scalars['Int']['output'];
  agt_peri_debut: Maybe<Scalars['Int']['output']>;
  agt_peri_fin: Maybe<Scalars['Int']['output']>;
  agt_type_role: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  pad_id: Maybe<Scalars['Int']['output']>;
  prf_id: Maybe<Scalars['Int']['output']>;
  uti_id: Scalars['Int']['output'];
};

/** Alerte: Obsolete ? */
export type Ale = {
  __typename: 'Ale';
  ale_detail: Maybe<Scalars['String']['output']>;
  ale_id: Scalars['String']['output'];
  ale_read: Scalars['Boolean']['output'];
  ale_read_datetime: Maybe<Scalars['String']['output']>;
  ale_titre: Scalars['String']['output'];
  ale_type: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type AlertesFinsContrats = {
  __typename: 'AlertesFinsContrats';
  alertesFinsDesc: Scalars['String']['output'];
  delay: Scalars['Int']['output'];
};

export type AltMinRem = {
  __typename: 'AltMinRem';
  mnSalMinConv: Maybe<Scalars['Float']['output']>;
  mnt: Maybe<Scalars['Float']['output']>;
  mntSmic: Maybe<Scalars['Float']['output']>;
  pct: Maybe<Scalars['Int']['output']>;
  pctSalMinConv: Maybe<Scalars['Int']['output']>;
  pctSmic: Maybe<Scalars['Int']['output']>;
  regle: Maybe<RegleAltMinRem>;
  typeMontantPlusFavorable: Maybe<Scalars['Int']['output']>;
};

export type AltMinSalaireInput = {
  dateDebutCnt: Scalars['Date']['input'];
  dateFinCnt: Scalars['Date']['input'];
  dateNaissance: Scalars['Date']['input'];
  isApprenti: Scalars['Boolean']['input'];
  niveauDiplomeAvant?: InputMaybe<Scalars['Int']['input']>;
  niveauDiplomePrepare: Scalars['String']['input'];
};

export type AltMinSalaireOutput = {
  __typename: 'AltMinSalaireOutput';
  altPeriods: Array<AltPeriod>;
  smicMensuel: SmicMensuel;
};

export type AltPeriod = {
  __typename: 'AltPeriod';
  debut: Scalars['Date']['output'];
  fin: Scalars['Date']['output'];
  minRem: AltMinRem;
  periodId: Scalars['Int']['output'];
};

/** Arrêt de travail */
export type Art = {
  __typename: 'Art';
  /** Do no exist in Art */
  artDesc: Maybe<Scalars['String']['output']>;
  /** Date accident */
  art_date_accident: Maybe<Scalars['Date']['output']>;
  /** Arrêt jusqu'au  */
  art_date_fin_previs: Scalars['Date']['output'];
  /** Reçu le */
  art_date_reception_employeur: Maybe<Scalars['Date']['output']>;
  /** Début arrêt ou prolongation */
  art_date_redaction: Scalars['Date']['output'];
  /** Date reprise */
  art_date_reprise: Maybe<Scalars['Date']['output']>;
  /** Depuis le */
  art_debut_subro: Maybe<Scalars['Date']['output']>;
  /** Dernier jour travaillé */
  art_der_jour_trav: Maybe<Scalars['Date']['output']>;
  /** Travaillé le matin uniquement */
  art_djt_matin_seulement: Scalars['Boolean']['output'];
  /** Subrogation demandée ? */
  art_est_subro: Scalars['Boolean']['output'];
  /** jusqu'au  */
  art_fin_subro: Maybe<Scalars['Date']['output']>;
  art_id: Scalars['Int']['output'];
  /**
   * Initial = 1
   * Prolongation = 2
   */
  art_init_ou_pro: Scalars['Int']['output'];
  /** Arrêt initial */
  art_initial_art_id: Maybe<Scalars['Int']['output']>;
  /** Motif de reprise */
  art_motif_reprise: Maybe<Scalars['Int']['output']>;
  /** Obsolete ? */
  art_nb_j_carence: Maybe<Scalars['Int']['output']>;
  /** Obsolete ? */
  art_nb_j_maintenus_pct66: Maybe<Scalars['Int']['output']>;
  /** Obsolete ? */
  art_nb_j_maintenus_pct90: Maybe<Scalars['Int']['output']>;
  /** Obsolete ? */
  art_nb_j_maintenus_pct100: Maybe<Scalars['Int']['output']>;
  art_nbj_maintien_choisi: Maybe<Scalars['Int']['output']>;
  /** Notes */
  art_notes: Maybe<Scalars['String']['output']>;
  /** Reprise l'après-midi  */
  art_reprise_aprem: Scalars['Boolean']['output'];
  /** depuis le */
  art_sart_date: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  /** Motif */
  mart_id: Scalars['Int']['output'];
  /** Regime maintien salaire spécifié */
  msal_id_choisi: Maybe<Scalars['Int']['output']>;
  pad_id: Scalars['Int']['output'];
  /** Salarié */
  sal_id: Scalars['Int']['output'];
  /** Statut */
  sart_id: Maybe<Scalars['Int']['output']>;
};

export type Asai = {
  __typename: 'Asai';
  /** L'id de l'entité ciblée */
  asai_entity_id: Scalars['Int']['output'];
  /** Type d'entité ciblé par l'annulation(exemple : 1 = EVVA) */
  asai_entity_type: Scalars['Int']['output'];
  asai_id: Scalars['Int']['output'];
  /** L'esai affilié à cette annulation (un asai est toujours affilié à un esai qui peux même contenir une saisie pour remplacer ce qui est annulé) */
  esai_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type Aui = {
  __typename: 'Aui';
  acd_id: Scalars['Int']['output'];
  aui_id: Scalars['Int']['output'];
  aui_is_read_only: Scalars['Boolean']['output'];
  aui_perso_menus: Scalars['Boolean']['output'];
  aui_type_acces_lots: Scalars['Int']['output'];
  /** type de role */
  aui_type_ui: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type BetaFeatureEnabled = {
  __typename: 'BetaFeatureEnabled';
  featId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lib: Scalars['String']['output'];
};

export type Bnqd = {
  __typename: 'Bnqd';
  bnqd_bic: Scalars['String']['output'];
  bnqd_domic: Scalars['String']['output'];
  bnqd_iban: Scalars['String']['output'];
  bnqd_id: Scalars['Int']['output'];
  bnqd_lib: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pad_id: Scalars['Int']['output'];
  ptb_id: Maybe<Scalars['Int']['output']>;
};

/** Fiche Banque Salarié */
export type Bnqs = {
  __typename: 'Bnqs';
  /** BIC  */
  bnqs_bic: Maybe<Scalars['String']['output']>;
  /** Compte par défaut pour le paiement  */
  bnqs_defaut: Scalars['Boolean']['output'];
  /** Domiciliation  */
  bnqs_domic: Maybe<Scalars['String']['output']>;
  /** IBAN  */
  bnqs_iban: Maybe<Scalars['String']['output']>;
  bnqs_id: Scalars['Int']['output'];
  bnqs_id_externe: Maybe<Scalars['String']['output']>;
  /** Titulaire  */
  bnqs_titu: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Salarié  */
  sal_id: Scalars['Int']['output'];
};

export type Bppla = {
  __typename: 'Bppla';
  bppla_id: Scalars['Int']['output'];
  bul_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ppla_id: Scalars['Int']['output'];
};

export type Bul = {
  __typename: 'Bul';
  bpplas: Maybe<Array<Bppla>>;
  bul_bloquer_mdp: Scalars['Boolean']['output'];
  bul_dateau: Scalars['Date']['output'];
  bul_datedu: Scalars['Date']['output'];
  bul_datereglement: Scalars['Date']['output'];
  bul_est_stc: Maybe<Scalars['Boolean']['output']>;
  bul_id: Scalars['Int']['output'];
  bul_referencepaiement: Scalars['String']['output'];
  bul_simul: Scalars['Boolean']['output'];
  bul_statutblocage: Scalars['Int']['output'];
  bul_type: Maybe<Scalars['Int']['output']>;
  calb_id: Maybe<Scalars['Int']['output']>;
  ccn_id: Maybe<Scalars['Int']['output']>;
  cmb_net: Maybe<Cmb>;
  cnt_id_si_unique: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mdp_id: Scalars['Int']['output'];
  pacp_id: Maybe<Scalars['Int']['output']>;
  pad_id: Scalars['Int']['output'];
  /** #Do not exists in Bul */
  pare: Maybe<Pare>;
  pare_id: Maybe<Scalars['Int']['output']>;
  pass_id: Maybe<Scalars['Int']['output']>;
  pifc_id: Maybe<Scalars['Int']['output']>;
  ppa_id: Scalars['Int']['output'];
  prbul_id: Maybe<Scalars['Int']['output']>;
  prtt_id: Maybe<Scalars['Int']['output']>;
  sal_id: Scalars['Int']['output'];
  src_id: Maybe<Scalars['Int']['output']>;
  tat_id: Maybe<Scalars['Int']['output']>;
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export type Carence = {
  __typename: 'Carence';
  dateDebut: Maybe<Scalars['Date']['output']>;
  dateFin: Maybe<Scalars['Date']['output']>;
  explain: Scalars['String']['output'];
  nbJours: Scalars['Float']['output'];
};

export type Catc = {
  __typename: 'Catc';
  acrd_id: Scalars['Int']['output'];
  /** #Do not exists in Catc */
  catc_desc: Maybe<Scalars['String']['output']>;
  catc_description: Maybe<Scalars['String']['output']>;
  catc_id: Scalars['Int']['output'];
  catc_lib: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CategorieTabAbs = {
  __typename: 'CategorieTabAbs';
  cat_type: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lib: Scalars['String']['output'];
  tabIds: Array<Scalars['Int']['output']>;
};

export type Ccn = {
  __typename: 'Ccn';
  /** Do not exists in Ccn */
  ccn_desc: Maybe<Scalars['String']['output']>;
  ccn_id: Scalars['Int']['output'];
  ccn_idcc: Scalars['Int']['output'];
  ccn_lib: Scalars['String']['output'];
  ccn_lib_long: Maybe<Scalars['String']['output']>;
  ccn_numbrochure: Maybe<Scalars['Int']['output']>;
  ccn_obs: Maybe<Scalars['String']['output']>;
  ccn_url: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Cdc = {
  __typename: 'Cdc';
  cdc_action: Scalars['Int']['output'];
  cdc_entity_id: Scalars['Int']['output'];
  cdc_entity_name: Scalars['String']['output'];
  cdc_id: Scalars['Int']['output'];
  cdc_metadata: Scalars['JSON']['output'];
  cdc_timestamp: Scalars['String']['output'];
  cdc_type: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  uti_id: Scalars['Int']['output'];
};

export type CdcForEsaiPeri = {
  __typename: 'CdcForEsaiPeri';
  cdc_action: Scalars['Int']['output'];
  cdc_metadata: Scalars['JSON']['output'];
  cdc_timestamp: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** #Do not exists in Cdc */
  uti_handler: Maybe<UtiHandlerInCdc>;
  uti_id: Scalars['Int']['output'];
};

/** Cas de dispense prévoyance frais de santé */
export type Cdpre = {
  __typename: 'Cdpre';
  cdpre_id: Scalars['Int']['output'];
  /** Libellé */
  cdpre_lib: Scalars['String']['output'];
  /** Notes */
  cdpre_notes: Maybe<Scalars['String']['output']>;
  /**
   * Ordre public = 1
   *     Contractuel = 2
   */
  cdpre_type: Scalars['Int']['output'];
  /** Do not exists in Cdpre */
  cdpre_type_desc: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

/** Paramétrage affichage cumul / demande d'absence */
export type Cga = {
  __typename: 'Cga';
  cga_id: Scalars['Int']['output'];
  /** Libellé personnalisé  */
  cga_lib_perso: Maybe<Scalars['String']['output']>;
  /** Ordre  */
  cga_ordre: Scalars['Int']['output'];
  /**
   * Valeur bulletin = 1
   * Valeur annuelle = 2
   * Valeur sur la durée du contrat = 3
   */
  cga_type_valeur: Scalars['Int']['output'];
  /** Cumul d'absence  */
  cml_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** Profil de demandes d'absences  */
  prga_id: Scalars['Int']['output'];
  /** Do not exist in Cga */
  tcgas: Maybe<Array<Tcga>>;
};

export type Cmb = {
  __typename: 'Cmb';
  bul_id: Scalars['Int']['output'];
  cmb_id: Scalars['Int']['output'];
  cmb_val_ann_cnt: Scalars['Float']['output'];
  cmb_val_duree_cnt: Scalars['Float']['output'];
  cmb_val_ppa_cnt: Scalars['Float']['output'];
  cml_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type Cmsal = {
  __typename: 'Cmsal';
  cmsal_anc_annees: Scalars['Int']['output'];
  cmsal_id: Scalars['Int']['output'];
  cmsal_nb: Scalars['Int']['output'];
  cmsal_num_ordre: Scalars['Int']['output'];
  cmsal_peridebut: Maybe<Scalars['Int']['output']>;
  cmsal_perifin: Maybe<Scalars['Int']['output']>;
  cmsal_taux: Scalars['Int']['output'];
  cmsal_unite: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  msal_id: Scalars['Int']['output'];
};

/** Commune */
export type Cmu = {
  __typename: 'Cmu';
  /** Article qui précède le nom de la commune */
  cmu_article: Scalars['String']['output'];
  /** Commmune avec arrondissement(non utilisé) */
  cmu_avec_arrond: Scalars['Boolean']['output'];
  /** non utilisé */
  cmu_cheflieu: Scalars['Boolean']['output'];
  /** non utilisé */
  cmu_codeactualite: Scalars['Int']['output'];
  /** code commune */
  cmu_codecommune: Scalars['String']['output'];
  /** code commmune globale(non utilisé) */
  cmu_codecommune_englobante: Maybe<Scalars['String']['output']>;
  /** Do not exist in Cmu */
  cmu_desc: Maybe<Scalars['String']['output']>;
  /** ID de la commune */
  cmu_id: Scalars['Int']['output'];
  /** Libellé de la commune */
  cmu_libelle: Scalars['String']['output'];
  /** non utilisé */
  cmu_typelibelle: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type CmuFilter = {
  /** Code Insee de la commune */
  codeCommune?: InputMaybe<Scalars['String']['input']>;
  codePostal?: InputMaybe<Scalars['String']['input']>;
};

/** Contrat */
export type Cnt = {
  __typename: 'Cnt';
  /** Id CCN de l'ent. utilisatrice  */
  ccn_id_euti_force: Maybe<Scalars['Int']['output']>;
  /** Id Cas de dispense mutuelle */
  cdpre_id: Maybe<Scalars['Int']['output']>;
  /** A un temps de travail spécifique ? */
  cnt_a_quot_trav_specifique: Scalars['Boolean']['output'];
  /** Id Mode de paiement acompte */
  cnt_acompte_mdp_id: Scalars['Int']['output'];
  /** Statut particulier du salarié pour l'AED  */
  cnt_aed_statut_particulier: Maybe<Scalars['Int']['output']>;
  /** Date de fin de la dispense */
  cnt_cdpre_date_fin: Maybe<Scalars['Date']['output']>;
  /** Date d'envoi du contrat au salarié */
  cnt_date_envoi: Maybe<Scalars['Date']['output']>;
  /** Date de notification licenciement ou engagement procédure rupture conventionnelle */
  cnt_date_notification: Maybe<Scalars['Date']['output']>;
  /** Date de paiement du solde tout compte */
  cnt_date_paiement_stc: Maybe<Scalars['Date']['output']>;
  /** Date de réception du contrat signé par l'employeur */
  cnt_date_reception: Maybe<Scalars['Date']['output']>;
  /** Date fin de période minimale pour les CDD à terme imprécis */
  cnt_datefin_duree_minimale: Maybe<Scalars['Date']['output']>;
  /** Date de fin de période d'essai  */
  cnt_datefin_essai: Maybe<Scalars['Date']['output']>;
  /** Date de fin de renouvellement période d'essai */
  cnt_datefin_essai_renouv: Maybe<Scalars['Date']['output']>;
  /** Date de fin prévisionnelle */
  cnt_datefin_prevue: Maybe<Scalars['Date']['output']>;
  /** Date de début de contrat */
  cnt_debut_date: Scalars['Date']['output'];
  /** Date début période souplesse */
  cnt_debut_periode_souplesse: Maybe<Scalars['Date']['output']>;
  /** Dernier jour travaillé payé forcée pour l'AED */
  cnt_der_jour_trav: Maybe<Scalars['Date']['output']>;
  /** Dernière génération de la DPAE */
  cnt_dpae_dateheure_gene: Maybe<Scalars['Date']['output']>;
  /** Date de fin de contrat */
  cnt_fin_date: Maybe<Scalars['Date']['output']>;
  /** Date fin période souplesse */
  cnt_fin_periode_souplesse: Maybe<Scalars['Date']['output']>;
  /** Heure d'embauche  */
  cnt_heure_embauche: Maybe<Scalars['String']['output']>;
  cnt_heure_embauche_reelle: Maybe<Scalars['Date']['output']>;
  cnt_heure_fin: Maybe<Scalars['String']['output']>;
  /** ID du contrat */
  cnt_id: Scalars['Int']['output'];
  /** Id externe pour utilisation par une application externe */
  cnt_id_externe: Maybe<Scalars['String']['output']>;
  /** Justification recours CDD */
  cnt_justif_recours_cdd: Maybe<Scalars['String']['output']>;
  /** Date engagement procédure */
  cnt_lic_date_eng_procedure: Maybe<Scalars['Date']['output']>;
  /** Notes */
  cnt_notes: Maybe<Scalars['String']['output']>;
  /** N° de contrat */
  cnt_num: Maybe<Scalars['String']['output']>;
  cnt_ppla_date_debut_cycle: Maybe<Scalars['Date']['output']>;
  /** Préavis effectué payé */
  cnt_preavis_fait: Scalars['Boolean']['output'];
  /** Préavis non effectué non payé */
  cnt_preavis_noneffnonpaye: Scalars['Boolean']['output'];
  /** Date début Préavis non effectué non payé */
  cnt_preavis_noneffnonpaye_datedebut: Maybe<Scalars['Date']['output']>;
  /** Date fin Préavis non effectué non payé */
  cnt_preavis_noneffnonpaye_datefin: Maybe<Scalars['Date']['output']>;
  /** Préavis non effectué payé */
  cnt_preavis_noneffpaye: Scalars['Boolean']['output'];
  /** Date debut Préavis non effectué payé */
  cnt_preavis_noneffpaye_datedebut: Maybe<Scalars['Date']['output']>;
  /** Date fin Préavis non effectué payé */
  cnt_preavis_noneffpaye_datefin: Maybe<Scalars['Date']['output']>;
  /** Date début préavis effectué payé */
  cnt_preavisfait_date_debut: Maybe<Scalars['Date']['output']>;
  /** Date fin préavis effectué payé */
  cnt_preavisfait_date_fin: Maybe<Scalars['Date']['output']>;
  /** Délai de prévenance effectué payé ? */
  cnt_prevenance_effpaye: Scalars['Boolean']['output'];
  /** Date début délai de prévenance effectué et payé */
  cnt_prevenance_effpaye_datedebut: Maybe<Scalars['Date']['output']>;
  /** Date fin délai de prévenance effectué et payé */
  cnt_prevenance_effpaye_datefin: Maybe<Scalars['Date']['output']>;
  /** Délai de prévenance non effectué payé ? */
  cnt_prevenance_noneffpaye: Scalars['Boolean']['output'];
  /** Date début délai de prévenance non effectué et payé */
  cnt_prevenance_noneffpaye_datedebut: Maybe<Scalars['Date']['output']>;
  /** Date fin délai de prévenance non effectué et payé */
  cnt_prevenance_noneffpaye_datefin: Maybe<Scalars['Date']['output']>;
  /** Temps de travail si pas à temps complet */
  cnt_quot_trav: Maybe<Scalars['Float']['output']>;
  /** Motif temps de travail spécifique */
  cnt_quot_trav_spec_raison: Maybe<Scalars['Int']['output']>;
  /** Id Salarié remplacé */
  cnt_rempla_sal_id: Maybe<Scalars['Int']['output']>;
  /** Salarié remplacé(saisie libre) */
  cnt_rempla_sal_libre: Maybe<Scalars['String']['output']>;
  /** Date Contrat repris déjà payé jusqu'au  */
  cnt_reprise_date_fin_traitement: Maybe<Scalars['Date']['output']>;
  /** Date de signature rupture conventionnelle */
  cnt_rupconv_date_signature: Maybe<Scalars['Date']['output']>;
  /** Id Mode de paiement salaire */
  cnt_salaire_mdp_id: Scalars['Int']['output'];
  /** CDD sans terme précis ? */
  cnt_sans_terme_precis: Scalars['Boolean']['output'];
  /** Est un contrat de simulation ? (non utilisé) */
  cnt_simul: Scalars['Boolean']['output'];
  /** Mode de paiement solde de tout compte */
  cnt_soldetc_mdp_id: Scalars['Int']['output'];
  /** Transaction en cours ? (1 = aucune, 2 = en cours, 3 = conclue) */
  cnt_transaction_statut: Maybe<Scalars['Int']['output']>;
  /** En cas d'assujettissement à la taxe sur salaires, exonérer les rémunérations versées au titre de ce contrat ?  */
  cnt_ts_exo: Scalars['Boolean']['output'];
  /** Contient les éventuelles options de frais de santé enregistrées pour ce contrat */
  coprs: Maybe<Array<Copr>>;
  dpub: Maybe<Dpub>;
  /** Id Type de contrat aidé */
  dpub_id: Maybe<Scalars['Int']['output']>;
  ects: Maybe<Array<Ect>>;
  /** Id de l'établissement dans lequel le contrat de travail est réalisé */
  eta_id: Scalars['Int']['output'];
  /** Id Entreprise utilisatrice(pour intérim) */
  euti_id: Maybe<Scalars['Int']['output']>;
  /**
   * Do not exists in Cnt
   * Resolver cntId -> evvas[] de la période courante
   */
  evvas: Maybe<Array<Evva>>;
  /** Id groupe de contrat */
  grp_id: Maybe<Scalars['Int']['output']>;
  has_current: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** Id Lot de paie */
  lot_id: Maybe<Scalars['Int']['output']>;
  /** Id Motif spécifique de non versement de l'IFCDD/IFM  */
  mnvi_id: Maybe<Scalars['Int']['output']>;
  mrem: Maybe<Array<Mrem>>;
  mtf: Maybe<Mtf>;
  /** Id du Motif de fin de contrat */
  mtf_id: Maybe<Scalars['Int']['output']>;
  ncnt: Ncnt;
  /** Id Nature du contrat */
  ncnt_id: Scalars['Int']['output'];
  /** Id profil Congés Payés forcé */
  pacp_id_force: Maybe<Scalars['Int']['output']>;
  /** Id profil de rémunération forcé */
  pare_id_force: Maybe<Scalars['Int']['output']>;
  /** Id profil Sécurité Sociale forcé */
  pass_id_force: Maybe<Scalars['Int']['output']>;
  /** id profil Congés ancienneté forcé */
  pcpa_id_force: Maybe<Scalars['Int']['output']>;
  pessta: Maybe<Pessta>;
  /** Id profil d'ind. fin de CDD forcé  */
  pifc_id_force: Maybe<Scalars['Int']['output']>;
  /** Id profil Planning hebdomadaire forcé */
  ppla_id_force: Maybe<Scalars['Int']['output']>;
  /** Id Profil d'affichage bulletin forcé  */
  prbul_id_force: Maybe<Scalars['Int']['output']>;
  /** Id profil de gestion des absences forcés */
  prga_id_force: Maybe<Scalars['Int']['output']>;
  prgp: Maybe<Prgp>;
  /** Id profil Gestion présences forcé */
  prgp_id_force: Maybe<Scalars['Int']['output']>;
  /** Obsolète */
  prof_id_prcp_force: Maybe<Scalars['Int']['output']>;
  /** Obsolète */
  prof_id_prem_force: Maybe<Scalars['Int']['output']>;
  /** Obsolète */
  prof_id_prss_force: Maybe<Scalars['Int']['output']>;
  /** Id profil RTT forcé */
  prtt_id_force: Maybe<Scalars['Int']['output']>;
  /** Id profil d'interface utilisateur forcé */
  prui_id_force: Maybe<Scalars['Int']['output']>;
  /** Id Motif de recours CDD */
  rcdd_id: Maybe<Scalars['Int']['output']>;
  sal: Sal;
  /** Id du salarié */
  sal_id: Scalars['Int']['output'];
  /** Id du salarié Tuteur de stage ou apprentissage */
  sal_id_tuteur: Maybe<Scalars['Int']['output']>;
  /** Id taux AT forcé */
  sat_id_force: Maybe<Scalars['Int']['output']>;
  /** Id statut emploi */
  semp_id: Scalars['Int']['output'];
  /** Spectacle / production */
  spec_id: Maybe<Scalars['Int']['output']>;
  /** Id statut retraite complémentaire forcé */
  src_id_force: Maybe<Scalars['Int']['output']>;
  /** Id du Type de rémunération */
  trem_id: Maybe<Scalars['Int']['output']>;
  vvas_salaire: Maybe<Array<Vva>>;
};


/** Contrat */
export type CntevvasArgs = {
  currentPeriOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Collaborateur = {
  __typename: 'Collaborateur';
  cnts: Array<Contrat>;
  has_current: Scalars['Boolean']['output'];
  latest_cnt_uorg_id: Scalars['Int']['output'];
  latest_cnt_uorg_lib: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  mgr_desc: Scalars['String']['output'];
  mgr_sal_id: Scalars['Int']['output'];
  niveau: Scalars['String']['output'];
  pad_id: Scalars['Int']['output'];
  sal_desc: Scalars['String']['output'];
  sal_id: Scalars['ID']['output'];
  sal_matricule: Scalars['String']['output'];
  sal_nom_famille: Scalars['String']['output'];
  sal_nom_usage: Scalars['String']['output'];
  sal_prenom: Scalars['String']['output'];
  sal_prenoms_etat_civil: Maybe<Scalars['String']['output']>;
  sal_sexe: Scalars['Int']['output'];
  uti_id: Maybe<Scalars['Int']['output']>;
};

export type Compteur = {
  __typename: 'Compteur';
  /** Id du type cumul */
  cml_id: Scalars['Int']['output'];
  /** Détail/explication du prévisionnel (actuellement non utilisé sur portail salarié) */
  explainPrevis: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Libellé */
  lib: Scalars['String']['output'];
  /** Ordre (non utilisé sur portail salarié */
  ordre: Scalars['Int']['output'];
  /** Types d'absences prises en compte dans le compteur */
  tabIdsUsedToCompute: Array<Scalars['Int']['output']>;
  /** Unité (non utilisé sur portail salarié) */
  unit: Scalars['String']['output'];
  /** Valeur */
  value: Scalars['Float']['output'];
  /** Compteur Prévisionnel (en comptant les demandes d'absences en cours) */
  valuePrevis: Scalars['Float']['output'];
};

export type CompteursEmployee = {
  __typename: 'CompteursEmployee';
  compteurs: Maybe<Array<Compteur>>;
  currentContrat: Maybe<Cnt>;
  id: Scalars['ID']['output'];
  lastBulPeri: Maybe<Scalars['Int']['output']>;
  message: Maybe<Scalars['String']['output']>;
  salDesc: Scalars['String']['output'];
};

export type Contrat = {
  __typename: 'Contrat';
  cnt_datefin_essai: Maybe<Scalars['String']['output']>;
  cnt_datefin_essai_renouv: Maybe<Scalars['String']['output']>;
  cnt_datefin_prevue: Maybe<Scalars['String']['output']>;
  cnt_debut_date: Scalars['String']['output'];
  cnt_fin_date: Maybe<Scalars['String']['output']>;
  cnt_id: Scalars['Int']['output'];
  dpub_id: Maybe<Scalars['Int']['output']>;
  dpub_lib: Maybe<Scalars['String']['output']>;
  emp_desc: Maybe<Scalars['String']['output']>;
  has_current: Scalars['Boolean']['output'];
  mtf_code: Maybe<Scalars['String']['output']>;
  mtf_id: Maybe<Scalars['Int']['output']>;
  mtf_libelle: Maybe<Scalars['String']['output']>;
  ncnt_code: Scalars['String']['output'];
  ncnt_id: Scalars['Int']['output'];
  ncnt_lib: Scalars['String']['output'];
  ncnt_lib_simplifie: Maybe<Scalars['String']['output']>;
  ppa_datedebut: Scalars['String']['output'];
  ppa_datefin: Scalars['String']['output'];
  sal_id: Scalars['Int']['output'];
  uorg_id: Scalars['Int']['output'];
  uorg_lib: Scalars['String']['output'];
};

export type ContratClient = {
  __typename: 'ContratClient';
  cnt_date_debut: Scalars['String']['output'];
  cnt_date_fin: Scalars['String']['output'];
  cnt_id: Scalars['Int']['output'];
  cnt_niveau_service: Scalars['Int']['output'];
  cnt_niveau_service_desc: Scalars['String']['output'];
};

export type Copr = {
  __typename: 'Copr';
  cnt_id: Scalars['Int']['output'];
  copr_datedebut: Scalars['Date']['output'];
  copr_datefin: Maybe<Scalars['Date']['output']>;
  copr_id: Scalars['Int']['output'];
  copr_nb: Maybe<Scalars['Int']['output']>;
  copr_peridebut: Scalars['Int']['output'];
  copr_perifin: Maybe<Scalars['Int']['output']>;
  copr_type_option: Scalars['Int']['output'];
  cprev_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  prev_id: Maybe<Scalars['Int']['output']>;
};

export type Cprev = {
  __typename: 'Cprev';
  bprev_desc: Maybe<Scalars['String']['output']>;
  bprev_id: Scalars['Int']['output'];
  computedCotisationMontant: Maybe<CprevComputedMontantCotisation>;
  copr: Maybe<Copr>;
  cprevIdsIncompatibles: Maybe<Array<Scalars['Int']['output']>>;
  cprevIdsLinked: Maybe<Array<Scalars['Int']['output']>>;
  cprev_affich_lib_dans_portails: Scalars['Boolean']['output'];
  cprev_affich_lib_dans_rub: Scalars['Boolean']['output'];
  cprev_choix_sal: Scalars['Boolean']['output'];
  cprev_code_option: Maybe<Scalars['String']['output']>;
  cprev_datedebut: Scalars['Date']['output'];
  cprev_datefin: Maybe<Scalars['Date']['output']>;
  cprev_etab: Scalars['Boolean']['output'];
  cprev_etab_code: Maybe<Scalars['String']['output']>;
  cprev_frais_sante_type_tarif: Maybe<Scalars['Int']['output']>;
  cprev_frais_sante_type_tarif_desc: Maybe<Scalars['String']['output']>;
  cprev_id: Scalars['Int']['output'];
  cprev_lib: Maybe<Scalars['String']['output']>;
  cprev_option_nb_max: Maybe<Scalars['Int']['output']>;
  cprev_option_saisir_nb: Maybe<Scalars['Boolean']['output']>;
  cprev_part_pat: Maybe<Scalars['Float']['output']>;
  cprev_rang_option: Maybe<Scalars['Int']['output']>;
  cprev_type_couverture: Maybe<Scalars['Int']['output']>;
  cprev_type_prorata_entree: Maybe<Scalars['Int']['output']>;
  cprev_type_prorata_sortie: Maybe<Scalars['Int']['output']>;
  cprev_type_risque: Scalars['Int']['output'];
  cprev_type_risque_desc: Maybe<Scalars['String']['output']>;
  /** #Do not exists in Cprev */
  dateDebutCotisation: Maybe<Scalars['Date']['output']>;
  dateFinCotisation: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  pprev_id: Scalars['Int']['output'];
  prev_id: Scalars['Int']['output'];
  prev_lib: Maybe<Scalars['String']['output']>;
  tprev_lib: Maybe<Scalars['String']['output']>;
  vcp: Maybe<Vcp>;
};

export type CprevComputedMontantCotisation = {
  __typename: 'CprevComputedMontantCotisation';
  /** Montant total calculé de la cotisation en euros */
  montantTotal: Scalars['Float']['output'];
  /** Montant part employeur calculé de la cotisation en euros */
  partEmployeur: Scalars['Float']['output'];
  /** Montant part salarié calculé de la cotisation en euros */
  partSalarie: Scalars['Float']['output'];
};

export type CreateEvvasInput = {
  cnt_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_id?: InputMaybe<Scalars['Int']['input']>;
  evva_date_debut?: InputMaybe<Scalars['DateTime']['input']>;
  evva_date_fin?: InputMaybe<Scalars['DateTime']['input']>;
  evva_est_regul?: InputMaybe<Scalars['Boolean']['input']>;
  evva_niveau: Scalars['Int']['input'];
  evva_periode_debut?: InputMaybe<Scalars['Int']['input']>;
  evva_periode_fin?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_commentaire?: InputMaybe<Scalars['String']['input']>;
  evva_regul_motif_id?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_periode_debut?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_periode_fin?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_type?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_valeur?: InputMaybe<Scalars['String']['input']>;
  evva_valeur?: InputMaybe<Scalars['String']['input']>;
  var_id: Scalars['Int']['input'];
};

export type CreateUtiParams = {
  sal_id: Scalars['Int']['input'];
  uti_email: Scalars['String']['input'];
};

/** Publication actualité RH */
export type Crh = {
  __typename: 'Crh';
  crh_content: Scalars['String']['output'];
  crh_datedebut: Scalars['String']['output'];
  crh_datefin: Maybe<Scalars['String']['output']>;
  crh_id: Scalars['Int']['output'];
  crh_info_arhia: Scalars['Boolean']['output'];
  crh_info_arhia_tous_dossiers: Scalars['Boolean']['output'];
  crh_sticky: Scalars['Boolean']['output'];
  crh_titre: Scalars['String']['output'];
  crh_visible_emp: Scalars['Boolean']['output'];
  crh_visible_expert: Scalars['Boolean']['output'];
  crh_visible_mgr: Scalars['Boolean']['output'];
  /** Do not exist in the CRH table */
  docs: Maybe<Array<Document>>;
  id: Scalars['ID']['output'];
  pad_id: Scalars['Int']['output'];
};

export type Crm_Cnt = {
  __typename: 'Crm_Cnt';
  cnt_date_debut: Scalars['Date']['output'];
  cnt_date_fin: Scalars['Date']['output'];
  cnt_first_peri_prod: Maybe<Scalars['Int']['output']>;
  cnt_first_peri_test: Maybe<Scalars['Int']['output']>;
  cnt_id: Scalars['Int']['output'];
  cnt_last_peri_prod: Maybe<Scalars['Int']['output']>;
  cnt_managing_see_current_peri: Maybe<Scalars['Boolean']['output']>;
  cnt_niveau_service: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  pad_id: Scalars['Int']['output'];
};

export type CurrentPeriodesEssaiForMgr = {
  __typename: 'CurrentPeriodesEssaiForMgr';
  periodesDesc: Scalars['String']['output'];
};

export type DateToFilterInput = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type DayAbsencesInfos = {
  __typename: 'DayAbsencesInfos';
  absenceDesc: Scalars['String']['output'];
  absencesOnThisDay: Array<Absence>;
  isAbsentAprem: Scalars['Boolean']['output'];
  isAbsentMatin: Scalars['Boolean']['output'];
};

export type DefaultEmploi = {
  __typename: 'DefaultEmploi';
  dpubIds: Maybe<Array<Scalars['Int']['output']>>;
  empId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ncntIds: Array<Scalars['Int']['output']>;
};

export type DemandeAbsMgrListe = {
  __typename: 'DemandeAbsMgrListe';
  abs_datedebut_desc: Scalars['String']['output'];
  abs_datefin_desc: Scalars['String']['output'];
  absence_heure: Scalars['Boolean']['output'];
  has_comment: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  nb: Scalars['Float']['output'];
  pad_id: Scalars['Int']['output'];
  sal_desc: Scalars['String']['output'];
  sal_matricule: Scalars['String']['output'];
  sal_nom_usage: Scalars['String']['output'];
  sal_prenom: Scalars['String']['output'];
  tab_desc: Scalars['String']['output'];
  tab_id: Scalars['Int']['output'];
  wdm_creation_timestamp_desc: Scalars['String']['output'];
  wdm_data: Scalars['JSON']['output'];
  wfrs_id: Scalars['Int']['output'];
  wfrs_status: Scalars['Int']['output'];
  wfs_desc: Scalars['String']['output'];
  wfs_id: Scalars['Int']['output'];
  wft_desc: Scalars['String']['output'];
};

export type DemandeAdmInfo = {
  __typename: 'DemandeAdmInfo';
  data: Scalars['JSON']['output'];
  esdiv_type: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  peri_traitement_paie: Scalars['Int']['output'];
};

export type DemandeurDesc = {
  __typename: 'DemandeurDesc';
  nom: Scalars['String']['output'];
  prenom: Scalars['String']['output'];
  sal_id: Scalars['Int']['output'];
};

export type DernierNet = {
  __typename: 'DernierNet';
  montantAllowed: Scalars['Float']['output'];
  montantDernierNet: Scalars['Float']['output'];
  pct: Scalars['Int']['output'];
  periode: Scalars['Int']['output'];
};

export type Derov = {
  __typename: 'Derov';
  derov_date_debut: Maybe<Scalars['Date']['output']>;
  derov_date_fin: Maybe<Scalars['Date']['output']>;
  derov_id: Scalars['Int']['output'];
  derov_is_validation_auto: Scalars['Boolean']['output'];
  derov_niveau_delegation_si_sal_null: Maybe<Scalars['Int']['output']>;
  /**
   * # Do not exists in Derov
   * Le manager à qui la validation des demandes échoue si tel est le cas
   */
  handler: Uti;
  id: Scalars['ID']['output'];
  pad_id: Scalars['Int']['output'];
  sal_id: Maybe<Scalars['Int']['output']>;
  sal_id_mgr_delegateur: Maybe<Scalars['Int']['output']>;
  uti_id_valideur: Maybe<Scalars['Int']['output']>;
  wfp_id: Scalars['Int']['output'];
};

/** Document */
export type Doc = {
  __typename: 'Doc';
  /** Afficher dans portail salarié ? */
  doc_afficher_portail_salarie: Scalars['Boolean']['output'];
  /** Commentaires */
  doc_comment: Maybe<Scalars['String']['output']>;
  /** Date de publication */
  doc_date_portail_salarie: Maybe<Scalars['Date']['output']>;
  doc_id: Scalars['String']['output'];
  /** Titre */
  doc_title: Maybe<Scalars['String']['output']>;
  doc_type: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Type de document */
  tdoc_id: Maybe<Scalars['Int']['output']>;
};

export type DocToSaveInput = {
  /** représente l'id de l'entité sur laquelle linker (sal_id, cnt_id, abs_id...) */
  entityId: Scalars['Int']['input'];
  file: Scalars['Upload']['input'];
  /** représente le type d'entité sur laquelle le document va être linké ('SAL', 'CNT', 'ABS'...) */
  linkedEntityName: Scalars['String']['input'];
  /** Si existe existe et true l'entité document pourra être visible par l'employeur sur son portail et les interfaces  */
  shouldPublishDocPortailEmp?: InputMaybe<Scalars['Boolean']['input']>;
  /** Si existe existe et true l'entité document pourra être visible par le salarié sur son portail si le document le concerne */
  shouldPublishDocPortailSal?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Document = {
  __typename: 'Document';
  doc_id: Scalars['ID']['output'];
  doc_title: Maybe<Scalars['String']['output']>;
  doc_type: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type DossierClient = {
  __typename: 'DossierClient';
  contrats: Scalars['String']['output'];
  contrats_array: Array<ContratClient>;
  dossier_desc: Scalars['String']['output'];
  infos_array: Array<AgentClient>;
  pad_id: Scalars['Int']['output'];
  should_display_infos_agents: Scalars['Boolean']['output'];
};

/** Dispositif de politique publique */
export type Dpub = {
  __typename: 'Dpub';
  /** libellé abbrégé */
  dpub_abrev: Maybe<Scalars['String']['output']>;
  /** Code */
  dpub_code: Scalars['String']['output'];
  dpub_id: Scalars['Int']['output'];
  /** Libellé */
  dpub_lib: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type DroitMaintien = {
  __typename: 'DroitMaintien';
  cmsal: Array<Cmsal>;
  explainDroitsConsommes: Scalars['String']['output'];
  explainMsalApplicable: Scalars['String']['output'];
  msal: Maybe<Msal>;
  resultPeriodesMaintien: ResultPeriodesMaintien;
};

export type Dvc = {
  __typename: 'Dvc';
  dvc_id: Scalars['Int']['output'];
  dvc_peridebut: Scalars['Int']['output'];
  dvc_perifin: Scalars['Int']['output'];
  dvc_timestamp_creation: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lot_id: Scalars['Int']['output'];
  uti_id_demandeur: Scalars['Int']['output'];
};

export type Eabs = {
  __typename: 'Eabs';
  cdc: Maybe<Array<CdcForEsaiPeri>>;
  cnt: Maybe<Cnt>;
  cnt_id: Maybe<Scalars['Int']['output']>;
  eabs_datedebut: Scalars['Date']['output'];
  eabs_datedebut_commence_aprem: Scalars['Boolean']['output'];
  eabs_datefin: Scalars['Date']['output'];
  eabs_datefin_finit_matin: Scalars['Boolean']['output'];
  eabs_external_id: Maybe<Scalars['String']['output']>;
  eabs_id: Scalars['Int']['output'];
  eabs_nb: Maybe<Scalars['Float']['output']>;
  eabs_saisie_datetime: Scalars['DateTime']['output'];
  ecnt: Maybe<Ecnt>;
  ecnt_id: Maybe<Scalars['Int']['output']>;
  esai_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** Do not exist in Eabs */
  tab: Maybe<Tab>;
  tab_id: Scalars['Int']['output'];
  uab_id: Scalars['Int']['output'];
  uti_id_saisie: Scalars['Int']['output'];
  wdm_id: Maybe<Scalars['Int']['output']>;
};

/** Saisie en cours d'arêt de travail par l'employeur */
export type Eart = {
  __typename: 'Eart';
  arretInitial: Maybe<Scalars['JSON']['output']>;
  art_id_bascule: Maybe<Scalars['Int']['output']>;
  cdc: Maybe<Array<CdcForEsaiPeri>>;
  /** Do no exist in Art */
  eartDesc: Maybe<Scalars['String']['output']>;
  /** Date accident */
  eart_date_accident: Maybe<Scalars['Date']['output']>;
  /** Arrêt jusqu'au  */
  eart_date_fin_previs: Scalars['Date']['output'];
  /** Reçu le */
  eart_date_reception_employeur: Maybe<Scalars['Date']['output']>;
  /** Début arrêt ou prolongation */
  eart_date_redaction: Scalars['Date']['output'];
  /** Date reprise */
  eart_date_reprise: Maybe<Scalars['Date']['output']>;
  /** Depuis le */
  eart_debut_subro: Maybe<Scalars['Date']['output']>;
  /** Dernier jour travaillé */
  eart_der_jour_trav: Maybe<Scalars['Date']['output']>;
  eart_derogatoire_covid: Maybe<Scalars['Boolean']['output']>;
  /** Travaillé le matin uniquement */
  eart_djt_matin_seulement: Scalars['Boolean']['output'];
  /** Subrogation demandée ? */
  eart_est_subro: Scalars['Boolean']['output'];
  /** jusqu'au  */
  eart_fin_subro: Maybe<Scalars['Date']['output']>;
  eart_id: Scalars['Int']['output'];
  /**
   * Initial = 1
   * Prolongation = 2
   */
  eart_init_ou_pro: Scalars['Int']['output'];
  /** Arrêt initial si basculé */
  eart_initial_art_id: Maybe<Scalars['Int']['output']>;
  /** Arrêt initial si demande non basculée */
  eart_initial_eart_id: Maybe<Scalars['Int']['output']>;
  eart_motif_covid: Maybe<Scalars['Int']['output']>;
  /** Motif de reprise */
  eart_motif_reprise: Maybe<Scalars['Int']['output']>;
  eart_nbj_maintien_choisi: Maybe<Scalars['Int']['output']>;
  /** Reprise l'après-midi  */
  eart_reprise_aprem: Scalars['Boolean']['output'];
  /** ID de la saisie employeur */
  esai_id: Scalars['Int']['output'];
  esal: Maybe<Esal>;
  /** Salarié */
  esal_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isLastEartForSameInitialArret: Maybe<Scalars['Boolean']['output']>;
  mart: Maybe<Mart>;
  /** Motif */
  mart_id: Scalars['Int']['output'];
  /** Regime maintien salaire spécifié */
  msal_id_choisi: Maybe<Scalars['Int']['output']>;
  sal: Maybe<Sal>;
  /** Salarié */
  sal_id: Maybe<Scalars['Int']['output']>;
};

export type Echelon = {
  __typename: 'Echelon';
  /** #Do not exists in Ech */
  acrd_id_classif_rattach: Maybe<Scalars['Int']['output']>;
  ech_desc: Maybe<Scalars['String']['output']>;
  ech_desc_sans_niveau: Maybe<Scalars['String']['output']>;
  ech_description: Maybe<Scalars['String']['output']>;
  ech_id: Scalars['Int']['output'];
  ech_lib: Scalars['String']['output'];
  ech_lib_notion: Maybe<Scalars['String']['output']>;
  ech_rang: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  nivc_id: Scalars['Int']['output'];
  tacc_id: Maybe<Scalars['Int']['output']>;
};

/** Contrat d'embauche en cours de saisie par l'employeur */
export type Ecnt = {
  __typename: 'Ecnt';
  acrd_id: Maybe<Scalars['Int']['output']>;
  aff_id: Maybe<Scalars['Int']['output']>;
  catc_id: Maybe<Scalars['Int']['output']>;
  cdc: Maybe<Array<CdcForEsaiPeri>>;
  /** Cas de dispense */
  cdpre_id: Maybe<Scalars['Int']['output']>;
  cnt_id_bascule: Maybe<Scalars['Int']['output']>;
  coeff: Maybe<Scalars['Int']['output']>;
  dpub: Maybe<Dpub>;
  /** Type de contrat aidé */
  dpub_id: Maybe<Scalars['Int']['output']>;
  ech_id: Maybe<Scalars['Int']['output']>;
  /** Temps de travail spécifique ? */
  ecnt_a_quot_trav_specifique: Scalars['Boolean']['output'];
  /** Mode de paiement acompte */
  ecnt_acompte_mdp_id: Scalars['Int']['output'];
  ecnt_alternance_has_salaire_fixe: Maybe<Scalars['Boolean']['output']>;
  ecnt_alternance_motif_derog: Maybe<Scalars['String']['output']>;
  ecnt_alternance_periodes: Maybe<Array<Scalars['JSON']['output']>>;
  /** Code niveau de diplôme préparé pour un apprenti */
  ecnt_cappr_code_niveau_diplome_prepare: Maybe<Scalars['String']['output']>;
  /** Date de fin de la dispense */
  ecnt_cdpre_date_fin: Maybe<Scalars['Date']['output']>;
  /** Cprev choisi - Exemple : [{ cprev_id: Int!, copr_nb: Int }] */
  ecnt_cprev_adhesions: Maybe<Array<Scalars['JSON']['output']>>;
  ecnt_cumul_emploi_retraite: Scalars['Boolean']['output'];
  ecnt_custom_profil_planning: Maybe<Array<Scalars['JSON']['output']>>;
  /** Date d'envoi du contrat au salarié */
  ecnt_date_envoi: Maybe<Scalars['Date']['output']>;
  /** Date de réception du contrat signé */
  ecnt_date_reception: Maybe<Scalars['Date']['output']>;
  ecnt_datefin_alternance: Maybe<Scalars['Date']['output']>;
  /** Date fin de période minimale */
  ecnt_datefin_duree_minimale: Maybe<Scalars['Date']['output']>;
  /** Date de fin de période d'essai  */
  ecnt_datefin_essai: Maybe<Scalars['Date']['output']>;
  /** Date de fin de renouvellement */
  ecnt_datefin_essai_renouv: Maybe<Scalars['Date']['output']>;
  /** Date de fin prévue */
  ecnt_datefin_prevue: Maybe<Scalars['Date']['output']>;
  /** Date de début de contrat */
  ecnt_debut_date: Scalars['Date']['output'];
  /** Date début période souplesse */
  ecnt_debut_periode_souplesse: Maybe<Scalars['Date']['output']>;
  ecnt_dpae_choix_transmission: Maybe<Scalars['Int']['output']>;
  /** Dernière génération */
  ecnt_dpae_dateheure_gene: Maybe<Scalars['DateTime']['output']>;
  /** True si le poste est éligible au taux AT fonctions Support (le cas échéant) */
  ecnt_est_tauxat_support: Maybe<Scalars['Boolean']['output']>;
  /** Date de fin de contrat */
  ecnt_fin_date: Maybe<Scalars['Date']['output']>;
  /** Date fin période souplesse */
  ecnt_fin_periode_souplesse: Maybe<Scalars['Date']['output']>;
  ecnt_has_periode_essai: Scalars['Boolean']['output'];
  /** Heure d'embauche  */
  ecnt_heure_embauche: Maybe<Scalars['String']['output']>;
  ecnt_heure_embauche_reelle: Maybe<Scalars['DateTime']['output']>;
  ecnt_heure_fin: Maybe<Scalars['String']['output']>;
  ecnt_heure_supp: Scalars['Float']['output'];
  ecnt_id: Scalars['Int']['output'];
  ecnt_is_stage_rem: Maybe<Scalars['Boolean']['output']>;
  /** Justification recours CDD */
  ecnt_justif_recours_cdd: Maybe<Scalars['String']['output']>;
  ecnt_montant_salaire: Maybe<Scalars['Float']['output']>;
  ecnt_nb_heures_decla_jour_solidarite: Maybe<Scalars['Float']['output']>;
  /** Notes */
  ecnt_notes: Maybe<Scalars['String']['output']>;
  /** N° de contrat */
  ecnt_num: Maybe<Scalars['String']['output']>;
  /** Facteurs de pénibilités - Exemple : [{ fpeb_id: Int!, penc_datedebut: Date!, penc_datedebut: Date }] */
  ecnt_penc: Maybe<Array<Scalars['JSON']['output']>>;
  ecnt_ppla_date_debut_cycle: Maybe<Scalars['Date']['output']>;
  ecnt_prev_dispense_date_fin: Maybe<Scalars['Date']['output']>;
  ecnt_prev_dispense_motif_id: Maybe<Scalars['Int']['output']>;
  ecnt_pro_niveau_etude: Maybe<Scalars['Int']['output']>;
  /** Temps de travail */
  ecnt_quot_trav: Maybe<Scalars['Float']['output']>;
  /** Motif */
  ecnt_quot_trav_spec_raison: Maybe<Scalars['Int']['output']>;
  ecnt_rem_heure_supp_included: Maybe<Scalars['Boolean']['output']>;
  /** Salarié remplacé */
  ecnt_rempla_sal_id: Maybe<Scalars['Int']['output']>;
  /** Salarié remplacé(saisie libre) */
  ecnt_rempla_sal_libre: Maybe<Scalars['String']['output']>;
  /** Date d'ancienneté du salarié */
  ecnt_sal_anciennete_date: Maybe<Scalars['Date']['output']>;
  /** Mode de paiement salaire */
  ecnt_salaire_mdp_id: Scalars['Int']['output'];
  /** CDD sans terme précis ? */
  ecnt_sans_terme_precis: Scalars['Boolean']['output'];
  /** Mode de paiement solde de tout compte */
  ecnt_soldetc_mdp_id: Scalars['Int']['output'];
  ecnt_stage_nb_heures: Maybe<Scalars['Float']['output']>;
  /**
   * Do not exists in Ecnt
   * Resolver ecntId -> evvas[] de la période courante
   */
  ecnt_type_decla_jour_solidarite: Maybe<Scalars['Int']['output']>;
  ecnt_type_saisie_salaire: Scalars['Int']['output'];
  /** Si salarié en temps partiel, alors on précise le type de cotisation */
  ecnt_type_tps_partiel_cotisant_tps_plein: Maybe<Scalars['Int']['output']>;
  /** Visite médicale d'embauche future */
  ecnt_vme_embauche_future_id: Maybe<Scalars['Int']['output']>;
  /** Visite médicale d'embauche passée */
  ecnt_vme_embauche_passee_id: Maybe<Scalars['Int']['output']>;
  ect_lib: Maybe<Scalars['String']['output']>;
  emp: Maybe<Emp>;
  emp_id: Maybe<Scalars['Int']['output']>;
  empc_id: Maybe<Scalars['Int']['output']>;
  esai_id: Scalars['Int']['output'];
  esal: Maybe<Esal>;
  /** Salarié */
  esal_id: Maybe<Scalars['Int']['output']>;
  /** Etablissement */
  eta_id: Scalars['Int']['output'];
  /** Entreprise utilisatrice */
  euti_id: Maybe<Scalars['Int']['output']>;
  evvas: Maybe<Array<Evva>>;
  fil_id: Maybe<Scalars['Int']['output']>;
  has_current: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** Renvoyé par la mutation à true si l'embauche est trop tardive pour être traitée en bascule mensuelle */
  isEmbaucheTardive: Maybe<Scalars['Boolean']['output']>;
  /** Lot de paie */
  lot_id: Scalars['Int']['output'];
  /** Si salarié a un motif de non versement des IFCDD / IFM */
  mnvi_id: Maybe<Scalars['Int']['output']>;
  mrem: Maybe<Array<Mrem>>;
  ncnt: Ncnt;
  /** Nature du contrat */
  ncnt_id: Scalars['Int']['output'];
  nivc_id: Maybe<Scalars['Int']['output']>;
  /** Personnaliser le profil Congés Payés */
  pacp_id_force: Maybe<Scalars['Int']['output']>;
  /** Personnaliser le profil de rémunération */
  pare_id_force: Maybe<Scalars['Int']['output']>;
  /** Personnaliser le profil Congés ancienneté */
  pcpa_id_force: Maybe<Scalars['Int']['output']>;
  pessta: Maybe<Pessta>;
  /** Personnaliser le profil Planning hebdomadaire */
  ppla_id_force: Maybe<Scalars['Int']['output']>;
  /** Personnaliser le profil RTT */
  prtt_id_force: Maybe<Scalars['Int']['output']>;
  /** Motif de recours CDD */
  rcdd_id: Maybe<Scalars['Int']['output']>;
  sal: Maybe<Sal>;
  /** Salarié */
  sal_id: Maybe<Scalars['Int']['output']>;
  /** Tuteur */
  sal_id_tuteur: Maybe<Scalars['Int']['output']>;
  src_id: Maybe<Scalars['Int']['output']>;
  /** Personnaliser le statut retraite complémentaire */
  src_id_force: Maybe<Scalars['Int']['output']>;
  /** Type de rémunération */
  trem_id: Maybe<Scalars['Int']['output']>;
  uorg_id: Maybe<Scalars['Int']['output']>;
};


/** Contrat d'embauche en cours de saisie par l'employeur */
export type EcntevvasArgs = {
  currentPeriOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Emploi occupé(table de liaison entre Contrat et Emploi) */
export type Ect = {
  __typename: 'Ect';
  /** Description du réglementaire auquel appartient l'emploi (ex : CCN des Services Automobiles) */
  acrd_desc: Maybe<Scalars['String']['output']>;
  /** Obsolète */
  acrd_id: Maybe<Scalars['Int']['output']>;
  /** Id du contrat */
  cnt_id: Scalars['Int']['output'];
  /** Id de l'Echelon dans la classification des emplois  */
  ech_id: Maybe<Scalars['Int']['output']>;
  /** Catégorie(saisie libre si ce mode a été activé) */
  ect_classif_cat: Maybe<Scalars['String']['output']>;
  /** Coefficient(saisie libre si ce mode a été activé) */
  ect_classif_coef: Maybe<Scalars['String']['output']>;
  /** Echelon(saisie libre si ce mode a été activé) */
  ect_classif_ech: Maybe<Scalars['String']['output']>;
  /** Filière(saisie libre si ce mode a été activé) */
  ect_classif_fil: Maybe<Scalars['String']['output']>;
  /** Niveau(saisie libre si ce mode a été activé) */
  ect_classif_niv: Maybe<Scalars['String']['output']>;
  /** Position(saisie libre si ce mode a été activé) */
  ect_classif_pos: Maybe<Scalars['String']['output']>;
  /** Début d'affectation sur cet emploi  */
  ect_datedebut: Scalars['Date']['output'];
  /** Fin d'affectation sur cet emploi (peut être null si l'affectation est toujours en cours) */
  ect_datefin: Maybe<Scalars['Date']['output']>;
  /** Id du lien entre contrat et emploi */
  ect_id: Scalars['Int']['output'];
  /** Libellé personnalisé pour cet emploi, si on ne souhaite pas appliquer le libellé standar de l'emploi (cette possiblité est ouverte optionnelement au niveau du dossier de paie) */
  ect_lib: Maybe<Scalars['String']['output']>;
  /** Période de paie pour l'entrée en vigueur de l'affectation de cet emploi */
  ect_peridebut: Scalars['Int']['output'];
  /** Période fin pour la fin d'affectation sur cet emploi (peut être null si l'affectation est toujours en cours) */
  ect_perifin: Maybe<Scalars['Int']['output']>;
  /** Coefficient applicable */
  ect_smc_coef: Maybe<Scalars['Int']['output']>;
  /**
   * Do not exists in Ect
   * Description de l'emploi
   */
  emp_desc: Maybe<Scalars['String']['output']>;
  /** Description de l'emploi (féminin) */
  emp_feminin_desc: Maybe<Scalars['String']['output']>;
  /** Id de l'emploi occupé  */
  emp_id: Scalars['Int']['output'];
  /** Libellé de l'emploi (féminin) */
  emp_libelle_feminin: Maybe<Scalars['String']['output']>;
  /** Libellé de l'emploi (masculin) */
  emp_libelle_masculin: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Id du Niveau dans la classification des emplois */
  nivc_id: Maybe<Scalars['Int']['output']>;
  /** Id de la Position dans la classification des emplois */
  posc_id: Maybe<Scalars['Int']['output']>;
  /** Description du positionnement dans la classification(ex : "Niveau 3 echélon 5") */
  positionnement_desc: Maybe<Scalars['String']['output']>;
  /** Obsolète */
  src_id_force: Maybe<Scalars['Int']['output']>;
};

/** Saisie Départ employeur */
export type Edep = {
  __typename: 'Edep';
  cdc: Maybe<Array<CdcForEsaiPeri>>;
  /** Do not exists in Edep */
  cnt: Maybe<Cnt>;
  cnt_id: Maybe<Scalars['Int']['output']>;
  ecnt: Maybe<Ecnt>;
  /** Ecnt ID(si nouvelle embauche sur le mois) */
  ecnt_id: Maybe<Scalars['Int']['output']>;
  /** Versement de l'indemnite de fin de CDD (si légalement optionnelle) */
  edep_a_indem_fin_cdd: Maybe<Scalars['Boolean']['output']>;
  /** Capital de fin de carrière(départ à la retraite) */
  edep_cfc_dep_vol_mnt: Maybe<Scalars['Float']['output']>;
  /** Capital de fin de carrière(mise à la retraite) */
  edep_cfc_mis_retraite: Maybe<Scalars['Float']['output']>;
  /** Montant contrepartie clause non concurrence */
  edep_contrepartie_non_concurrence: Maybe<Scalars['Float']['output']>;
  /** Si motif licenciement CSP, montant de l'indemnité de préavis qui aurait été versée */
  edep_csp_mnt_indem_preavis: Maybe<Scalars['Float']['output']>;
  /** Si motif licenciement CSP, nombre de mois de préavis utilisés */
  edep_csp_nb_mois_preavis: Maybe<Scalars['Float']['output']>;
  /** Date de fin */
  edep_date_fin: Scalars['Date']['output'];
  /** Date de notification */
  edep_date_notification: Maybe<Scalars['Date']['output']>;
  /** Date de paiement */
  edep_date_paiement: Maybe<Scalars['Date']['output']>;
  /** Dernier jour travaillé payé */
  edep_der_jour_trav: Maybe<Scalars['Date']['output']>;
  /** Durée clause non concurrence */
  edep_duree_non_concurrence: Maybe<Scalars['Int']['output']>;
  edep_id: Scalars['Int']['output'];
  /** Indemnité légale de départ à la retraite */
  edep_indemnite_dep_ret_vol_mnt: Maybe<Scalars['Float']['output']>;
  /** Indemnité de fin de mandat */
  edep_indemnite_fin_mandat: Maybe<Scalars['Float']['output']>;
  /** Indemnité légale de mise à la retraite */
  edep_indemnite_mise_ret_non_soum: Maybe<Scalars['Float']['output']>;
  /** Montant de l'indemnité de rupture conventionnelle (si supérieure au légal)     */
  edep_indemnite_rupture_conv: Maybe<Scalars['Float']['output']>;
  /** Montant de l'indemnité de rupture légale */
  edep_indemnite_rupture_legale: Maybe<Scalars['Float']['output']>;
  /** Montant de l'indemnité de rupture totale   */
  edep_indemnite_rupture_totale: Maybe<Scalars['Float']['output']>;
  /** Date engagement procédure */
  edep_lic_date_eng_procedure: Maybe<Scalars['Date']['output']>;
  edep_mtf_cplt_id: Maybe<Scalars['Int']['output']>;
  /** Le salarié peut il bénéficier d'une pension de retraite ? */
  edep_peut_beneficier_pension_retraite: Maybe<Scalars['Boolean']['output']>;
  /** Préavis effectué payé */
  edep_preavis_fait: Scalars['Boolean']['output'];
  /** Préavis non effectué non payé */
  edep_preavis_noneffnonpaye: Scalars['Boolean']['output'];
  /** Date de début Préavis non effectué non payé */
  edep_preavis_noneffnonpaye_datedebut: Maybe<Scalars['Date']['output']>;
  /** date de fin Préavis non effectué non payé */
  edep_preavis_noneffnonpaye_datefin: Maybe<Scalars['Date']['output']>;
  /** Préavis non effectué payé */
  edep_preavis_noneffpaye: Scalars['Boolean']['output'];
  /** Date de début Préavis non effectué payé */
  edep_preavis_noneffpaye_datedebut: Maybe<Scalars['Date']['output']>;
  /** Date de fin Préavis non effectué payé */
  edep_preavis_noneffpaye_datefin: Maybe<Scalars['Date']['output']>;
  /** Date de début Préavis effectué payé */
  edep_preavisfait_date_debut: Maybe<Scalars['Date']['output']>;
  /** date de fin Préavis effectué payé */
  edep_preavisfait_date_fin: Maybe<Scalars['Date']['output']>;
  /** Délai de prévenance effectué payé */
  edep_prevenance_effpaye: Scalars['Boolean']['output'];
  /** Date de début Délai de prévenance effectué payé */
  edep_prevenance_effpaye_datedebut: Maybe<Scalars['Date']['output']>;
  /** date de fin Délai de prévenance effectué payé */
  edep_prevenance_effpaye_datefin: Maybe<Scalars['Date']['output']>;
  /** Délai de prévenance non effectué payé */
  edep_prevenance_noneffpaye: Scalars['Boolean']['output'];
  /** Date de début Délai de prévenance non effectué payé */
  edep_prevenance_noneffpaye_datedebut: Maybe<Scalars['Date']['output']>;
  /** Date de fin Délai de prévenance non effectué payé */
  edep_prevenance_noneffpaye_datefin: Maybe<Scalars['Date']['output']>;
  /** Montant remboursement de dédit formation */
  edep_remboursement_dedit_formation: Maybe<Scalars['Float']['output']>;
  /** Date de signature */
  edep_rupconv_date_signature: Maybe<Scalars['Date']['output']>;
  /** Mode de paiement du STC */
  edep_sdtc_mdp_id: Scalars['Int']['output'];
  /** Montant de la transaction */
  edep_transaction_montant: Maybe<Scalars['Float']['output']>;
  /** Transaction */
  edep_transaction_statut: Maybe<Scalars['Int']['output']>;
  /** Véhicule de fonction conservé pendant le préavis */
  edep_vehicule_fonction: Maybe<Scalars['Boolean']['output']>;
  /** Lot de saisie */
  esai_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** Mode de paiement */
  mdp_id: Maybe<Scalars['Int']['output']>;
  /** Motif spécifique de non versement de l'IFCDD/IFM  */
  mnvi_id: Maybe<Scalars['Int']['output']>;
  mtf: Maybe<Mtf>;
  /** Motif de fin */
  mtf_id: Maybe<Scalars['Int']['output']>;
};

export type Emp = {
  __typename: 'Emp';
  acrd_desc: Maybe<Scalars['String']['output']>;
  acrd_id: Maybe<Scalars['Int']['output']>;
  acrd_id_classif_rattach: Maybe<Scalars['Int']['output']>;
  echelons: Maybe<Array<Empc>>;
  emp_classif_cat: Maybe<Scalars['String']['output']>;
  emp_classif_coef: Maybe<Scalars['String']['output']>;
  emp_classif_ech: Maybe<Scalars['String']['output']>;
  emp_classif_filiere: Maybe<Scalars['String']['output']>;
  emp_classif_niveau: Maybe<Scalars['String']['output']>;
  emp_classif_pos: Maybe<Scalars['String']['output']>;
  emp_code: Maybe<Scalars['String']['output']>;
  emp_datedebut: Maybe<Scalars['Date']['output']>;
  emp_datefin: Maybe<Scalars['Date']['output']>;
  /** #Do not exists in Emp */
  emp_desc_long: Maybe<Scalars['String']['output']>;
  emp_description: Maybe<Scalars['String']['output']>;
  emp_extension_code_pcs: Maybe<Scalars['String']['output']>;
  emp_id: Scalars['Int']['output'];
  emp_id_externe: Maybe<Scalars['String']['output']>;
  emp_libelle_feminin: Scalars['String']['output'];
  emp_libelle_masculin: Scalars['String']['output'];
  emp_qualifs_requises: Maybe<Scalars['String']['output']>;
  emp_type_gestion_classif: Scalars['Int']['output'];
  empcs: Maybe<Array<Empc>>;
  espe_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  pad_id: Maybe<Scalars['Int']['output']>;
  pcs_code: Maybe<Scalars['String']['output']>;
  pcs_id: Maybe<Scalars['Int']['output']>;
};

export type Empc = {
  __typename: 'Empc';
  /** #Do not exists in Empc */
  ech_desc: Maybe<Scalars['String']['output']>;
  ech_id: Maybe<Scalars['Int']['output']>;
  ech_lib_notion: Maybe<Scalars['String']['output']>;
  emp_id: Scalars['Int']['output'];
  empc_desc: Maybe<Scalars['String']['output']>;
  empc_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  nivc_desc: Maybe<Scalars['String']['output']>;
  nivc_id: Maybe<Scalars['Int']['output']>;
  posc_id: Maybe<Scalars['Int']['output']>;
};

export type Epac = {
  __typename: 'Epac';
  epac_date: Scalars['Date']['output'];
  epac_est_paye: Scalars['Boolean']['output'];
  epac_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  liv_id: Scalars['Int']['output'];
  mdp_id: Scalars['Int']['output'];
  uti_id: Scalars['Int']['output'];
};

export type Esai = {
  __typename: 'Esai';
  aeta_type: Scalars['Int']['output'];
  asai: Maybe<Asai>;
  eabsSaisis: Maybe<Array<Eabs>>;
  eartSaisis: Maybe<Array<Eart>>;
  ecntSaisis: Maybe<Array<Ecnt>>;
  edepSaisis: Maybe<Array<Edep>>;
  esai_datetime_bascule: Maybe<Scalars['DateTime']['output']>;
  esai_datetime_creation: Maybe<Scalars['DateTime']['output']>;
  esai_datetime_derniere_saisie: Scalars['DateTime']['output'];
  esai_datetime_validation: Maybe<Scalars['DateTime']['output']>;
  esai_id: Scalars['Int']['output'];
  esai_peri: Scalars['Int']['output'];
  esai_statut: Scalars['Int']['output'];
  esai_type: Scalars['Int']['output'];
  esalSaisis: Maybe<Array<Esal>>;
  esdivSaisis: Maybe<Array<Esdiv>>;
  evvaSaisis: Maybe<Array<Evva>>;
  id: Scalars['ID']['output'];
  lot: Maybe<Lot>;
  lot_id: Scalars['Int']['output'];
  mremSaisis: Maybe<Array<Mrem>>;
  userBascule: Maybe<UserMinimalInfos>;
  /** Do not exist in Esai */
  userValidation: Maybe<UserMinimalInfos>;
  uti_id_derniere_saisie: Scalars['Int']['output'];
  uti_id_validation: Maybe<Scalars['Int']['output']>;
};

/** Fiche salarié en cours de saisie par l'employeur */
export type Esal = {
  __typename: 'Esal';
  cdc: Maybe<Array<CdcForEsaiPeri>>;
  ecnts: Maybe<Array<Ecnt>>;
  esai_id: Maybe<Scalars['Int']['output']>;
  /** Code postal */
  esal_adresse_codepostal: Scalars['String']['output'];
  /** Commune */
  esal_adresse_commune_nom: Scalars['String']['output'];
  /** Complément adresse */
  esal_adresse_constr_cplt: Maybe<Scalars['String']['output']>;
  esal_adresse_pays_id: Maybe<Scalars['Int']['output']>;
  /** Complément voie */
  esal_adresse_voie_cplt: Maybe<Scalars['String']['output']>;
  /** Voie */
  esal_adresse_voie_desc: Scalars['String']['output'];
  /** BIC */
  esal_bnqs_bic: Maybe<Scalars['String']['output']>;
  /** Domiciliation */
  esal_bnqs_domic: Maybe<Scalars['String']['output']>;
  /** IBAN */
  esal_bnqs_iban: Maybe<Scalars['String']['output']>;
  /** Titulaire */
  esal_bnqs_titu: Maybe<Scalars['String']['output']>;
  /** Date de création de la fiche */
  esal_creation_datetime: Scalars['DateTime']['output'];
  /** Adresse email */
  esal_email: Maybe<Scalars['String']['output']>;
  esal_id: Scalars['Int']['output'];
  /** Matricule */
  esal_matricule: Scalars['String']['output'];
  /** Lieu de naissance */
  esal_naissance_commune_nom: Scalars['String']['output'];
  /** Date de naissance */
  esal_naissance_date: Scalars['Date']['output'];
  /** Pays de naissance */
  esal_naissance_pays_id: Maybe<Scalars['Int']['output']>;
  /** Nationalité */
  esal_nationalite_id: Maybe<Scalars['Int']['output']>;
  /** NIR */
  esal_nir: Scalars['String']['output'];
  /** Clé NIR */
  esal_nir_cle: Scalars['String']['output'];
  /** Nom de naissance */
  esal_nom_famille: Scalars['String']['output'];
  /** Nom d'usage  */
  esal_nom_usage: Scalars['String']['output'];
  /** Prénom */
  esal_prenom: Scalars['String']['output'];
  /** Prénoms exact dans l'état civil */
  esal_prenoms_etat_civil: Maybe<Scalars['String']['output']>;
  /**
   * Homme = 1
   * Femme = 2
   */
  esal_sexe: Maybe<Scalars['Int']['output']>;
  /** Tél. 1 */
  esal_tel_1: Maybe<Scalars['String']['output']>;
  /** Tél. 2 */
  esal_tel_2: Maybe<Scalars['String']['output']>;
  esal_trav_hand_date_reco: Maybe<Scalars['Date']['output']>;
  esal_trav_hand_id: Maybe<Scalars['Int']['output']>;
  esal_ttra_date_emission: Maybe<Scalars['Date']['output']>;
  esal_ttra_date_fin_validite: Maybe<Scalars['Date']['output']>;
  esal_ttra_lieu_delivr: Maybe<Scalars['String']['output']>;
  esal_ttra_nom_administration: Maybe<Scalars['String']['output']>;
  esal_ttra_num: Maybe<Scalars['String']['output']>;
  esal_ttra_renouv: Maybe<Scalars['Boolean']['output']>;
  esal_tytr_id: Maybe<Scalars['Int']['output']>;
  /** Va rarement être à false quand alimenté (donc non-null), mais peut l'être si l'employeur s'est rétracté après la saisie du contrat ce qui nous permet entre autre d'indiquer que le salarié est supprimable car plus rien n'est rattaché à lui. */
  hasAtleastOneEcnt: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  last_ecnt: Maybe<Ecnt>;
  mdp_id: Maybe<Scalars['Int']['output']>;
  /** Do not exists in Esal */
  nationalite_desc: Maybe<Scalars['String']['output']>;
  pays_adresse_desc: Maybe<Scalars['String']['output']>;
  pays_naissance_desc: Maybe<Scalars['String']['output']>;
  sal_id_bascule: Maybe<Scalars['Int']['output']>;
};

export type Esdiv = {
  __typename: 'Esdiv';
  /** Do not exist in esdiv */
  cdc: Maybe<Array<CdcForEsaiPeri>>;
  cnt: Maybe<Cnt>;
  ecnt: Maybe<Ecnt>;
  esai_id: Scalars['Int']['output'];
  esal: Maybe<Esal>;
  esdiv_data: Scalars['JSON']['output'];
  esdiv_id: Scalars['Int']['output'];
  esdiv_type: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  sal: Maybe<Sal>;
  wdm_id: Maybe<Scalars['Int']['output']>;
};

export type Esdra = {
  __typename: 'Esdra';
  esdra_data: Scalars['JSON']['output'];
  esdra_id: Scalars['Int']['output'];
  esdra_last_modif: Scalars['DateTime']['output'];
  esdra_related_pk: Maybe<Scalars['Int']['output']>;
  esdra_status: Scalars['Int']['output'];
  esdra_title: Scalars['String']['output'];
  esdra_type: Scalars['Int']['output'];
  esdra_uti_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  pad_id: Scalars['Int']['output'];
};

export type Eta = {
  __typename: 'Eta';
  eta_activite: Scalars['String']['output'];
  eta_adresse_cmu_id: Maybe<Scalars['Int']['output']>;
  eta_adresse_commune: Scalars['String']['output'];
  eta_adresse_constr_cplt: Maybe<Scalars['String']['output']>;
  eta_adresse_cp: Scalars['String']['output'];
  eta_adresse_pays_id: Maybe<Scalars['Int']['output']>;
  eta_adresse_voie_cplt: Maybe<Scalars['String']['output']>;
  eta_adresse_voie_desc: Scalars['String']['output'];
  eta_code: Scalars['String']['output'];
  eta_codeape: Scalars['String']['output'];
  eta_codesectionprudh: Scalars['String']['output'];
  eta_codesectionprudh_derog: Scalars['String']['output'];
  eta_dpae_rsp_id: Maybe<Scalars['Int']['output']>;
  eta_dsn_fraction_nb_total: Maybe<Scalars['Int']['output']>;
  eta_dsn_fraction_num: Maybe<Scalars['Int']['output']>;
  eta_edition_cnt_rsp_id: Maybe<Scalars['Int']['output']>;
  eta_id: Scalars['Int']['output'];
  eta_interim_pseudosiret: Maybe<Scalars['String']['output']>;
  eta_nom: Maybe<Scalars['String']['output']>;
  eta_siret: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Do no exist in Eta */
  lastTats: Maybe<Array<Tat>>;
  pad_id: Scalars['Int']['output'];
  related_lots: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};


export type EtalastTatsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** #Etape de paie */
export type Etap = {
  __typename: 'Etap';
  aetas: Maybe<Array<Aeta>>;
  datePaiementPeri: Maybe<Scalars['Date']['output']>;
  deadline: Maybe<Scalars['Date']['output']>;
  etap_acces_avant_date: Maybe<Scalars['Boolean']['output']>;
  etap_id: Scalars['Int']['output'];
  etap_lib: Scalars['String']['output'];
  etap_num_ordre: Maybe<Scalars['Int']['output']>;
  etap_type: Scalars['Int']['output'];
  etapeStatus: Maybe<Scalars['Int']['output']>;
  etd: Maybe<Etd>;
  etde: Maybe<Etde>;
  id: Scalars['ID']['output'];
  lot: Maybe<Lot>;
  /** Do not exist in Etap */
  lot_id: Scalars['Int']['output'];
  pad_id: Maybe<Scalars['Int']['output']>;
  peri: Maybe<Scalars['Int']['output']>;
};

/** #Etape du dossier */
export type Etd = {
  __typename: 'Etd';
  etap_id: Scalars['Int']['output'];
  etd_date_limite: Scalars['Date']['output'];
  etd_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ppa_id: Scalars['Int']['output'];
};

export type Etde = {
  __typename: 'Etde';
  etap_id: Scalars['Int']['output'];
  etde_id: Scalars['Int']['output'];
  etde_is_num_jour_fixe_mois_suivant: Maybe<Scalars['Int']['output']>;
  etde_mode_num_jour: Scalars['Int']['output'];
  etde_num_jour: Scalars['Int']['output'];
  etde_peri_debut: Scalars['Int']['output'];
  etde_peri_fin: Maybe<Scalars['Int']['output']>;
  etde_type_decompte_jour: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
};

export type Evva = {
  __typename: 'Evva';
  /** Do not exist in Evva */
  cancel_asai_id: Maybe<Scalars['Int']['output']>;
  cdc: Maybe<Array<CdcForEsaiPeri>>;
  cnt: Maybe<Cnt>;
  cnt_id: Maybe<Scalars['Int']['output']>;
  ecnt_id: Maybe<Scalars['Int']['output']>;
  eemb_id: Maybe<Scalars['Int']['output']>;
  esai_id: Scalars['Int']['output'];
  esal: Maybe<Esal>;
  evva_date_debut: Maybe<Scalars['Date']['output']>;
  evva_date_fin: Maybe<Scalars['Date']['output']>;
  evva_est_regul: Maybe<Scalars['Boolean']['output']>;
  evva_id: Scalars['Int']['output'];
  evva_niveau: Scalars['Int']['output'];
  evva_periode_debut: Maybe<Scalars['Int']['output']>;
  evva_periode_fin: Maybe<Scalars['Int']['output']>;
  evva_regul_commentaire: Maybe<Scalars['String']['output']>;
  evva_regul_motif_id: Maybe<Scalars['Int']['output']>;
  evva_regul_periode_debut: Maybe<Scalars['Int']['output']>;
  evva_regul_periode_fin: Maybe<Scalars['Int']['output']>;
  evva_regul_type: Scalars['Int']['output'];
  evva_regul_valeur: Maybe<Scalars['String']['output']>;
  evva_valeur: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  pres: Maybe<Pres>;
  sal: Maybe<Sal>;
  var: Maybe<Var>;
  var_id: Scalars['Int']['output'];
};

export type Fil = {
  __typename: 'Fil';
  acrd_id: Scalars['Int']['output'];
  catc_id: Maybe<Scalars['Int']['output']>;
  /** #Do not exists in Fil */
  fil_desc: Maybe<Scalars['String']['output']>;
  fil_description: Maybe<Scalars['String']['output']>;
  fil_id: Scalars['Int']['output'];
  fil_lib: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  tacc_id: Maybe<Scalars['Int']['output']>;
};

export type Fpeb = {
  __typename: 'Fpeb';
  fpeb_dsn_code: Scalars['String']['output'];
  fpeb_id: Scalars['Int']['output'];
  fpeb_lib: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Frj = {
  __typename: 'Frj';
  frj_id: Scalars['Int']['output'];
  frj_libelle: Scalars['String']['output'];
  icj_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type GenerateVirementInput = {
  bnqd_id: Scalars['Int']['input'];
  cnt_ids: Array<Scalars['Int']['input']>;
  dateExecution: Scalars['Date']['input'];
  lot_id: Scalars['Int']['input'];
  peri: Scalars['Int']['input'];
};

export type GetEdepsInput = {
  cntIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Dossier accessibles à l'utilisateur */
export type GrantedFolder = {
  __typename: 'GrantedFolder';
  /** date début accès */
  acd_date_debut: Maybe<Scalars['Date']['output']>;
  /** date fin accès */
  acd_date_fin: Maybe<Scalars['Date']['output']>;
  /** Consultant en charge du dossier */
  consultant_en_charge_desc: Maybe<Scalars['String']['output']>;
  /** Dossier général (Un dossier général relie plusieurs sous dossiers de paie) (ID) */
  dos_id: Scalars['Int']['output'];
  /** Dossier général (Libellé)   */
  dos_libelle: Scalars['String']['output'];
  pad_id: Scalars['Int']['output'];
  /** Libellé du dossier de paie   */
  pad_libelle: Scalars['String']['output'];
  /** logo du dossier */
  pad_theme_logo_filename: Maybe<Scalars['String']['output']>;
};

export type HistoAction = {
  __typename: 'HistoAction';
  hact_crud_type: Maybe<Scalars['String']['output']>;
  hact_desc: Maybe<Scalars['String']['output']>;
  hact_fk_table: Maybe<Scalars['String']['output']>;
  hact_id: Scalars['ID']['output'];
  hact_timestamp: Maybe<Scalars['String']['output']>;
};

/** Membre du foyer / ayant - droit */
export type Iad = {
  __typename: 'Iad';
  /** Né(e) le  */
  iad_date_naissance: Maybe<Scalars['Date']['output']>;
  /** Date de début  */
  iad_datedebut: Scalars['Date']['output'];
  /** Date de fin  */
  iad_datefin: Maybe<Scalars['Date']['output']>;
  iad_id: Scalars['Int']['output'];
  /** Nom  */
  iad_nom: Scalars['String']['output'];
  /** Période début  */
  iad_periodedebut: Scalars['Int']['output'];
  /** Période fin  */
  iad_periodefin: Maybe<Scalars['Int']['output']>;
  /** Prénom  */
  iad_prenom: Scalars['String']['output'];
  /**
   * Type de charge:
   *     Pas à charge = 1
   * A charge fiscalement = 2
   * En poursuite d'études = 3
   * Handicapé majeur = 4
   * Ascendant dépendant à charge = 5
   */
  iad_type_charge: Scalars['Int']['output'];
  iad_type_charge_desc: Maybe<Scalars['String']['output']>;
  /**
   * Lien de parenté
   * MARIE = 1,
   * PACSE = 2,
   * CONCUBIN = 3,
   * ENFANT = 4,
   * ASCENDANT = 5
   */
  iad_type_parente: Scalars['Int']['output'];
  /** Do not exist in Iad */
  iad_type_parente_desc: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Salarié  */
  sal_id: Scalars['Int']['output'];
};

export type InfoPaiement = {
  __typename: 'InfoPaiement';
  afod_id: Maybe<Scalars['Int']['output']>;
  dateEcheance: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isEstimation: Scalars['Boolean']['output'];
  libelle: Scalars['String']['output'];
  libelle_simplifie: Scalars['String']['output'];
  montant: Scalars['Float']['output'];
  paiementPeriodicite: Scalars['Int']['output'];
  periPaiement: Scalars['Int']['output'];
  statutEstimation: Maybe<Scalars['Int']['output']>;
  tor_id: Maybe<Scalars['Int']['output']>;
  typePaiement: Scalars['Int']['output'];
  typePeriode: Scalars['Int']['output'];
};

export type Infos = {
  __typename: 'Infos';
  pacp: Maybe<ResultProfilCpAuto>;
  pare: Maybe<ResultProfilRemAuto>;
  ppla: Maybe<ResultProfilPlanningAuto>;
  profilsCpAnc: Maybe<ResultProfilCpAncAuto>;
  prtt: Maybe<ResultPrttAuto>;
  src: Maybe<Statut>;
};

export type InfosAbsenceMgr = {
  __typename: 'InfosAbsenceMgr';
  abs_datedebut: Scalars['String']['output'];
  abs_datefin: Scalars['String']['output'];
  abs_nb: Scalars['Int']['output'];
  absence_heure: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
  prenom: Scalars['String']['output'];
  sal_id: Maybe<Scalars['Int']['output']>;
  tab_desc: Scalars['String']['output'];
  tab_lib: Maybe<Scalars['String']['output']>;
  wdm_creation_timestamp: Scalars['String']['output'];
  wdm_data: Scalars['JSON']['output'];
  wdm_id: Scalars['Int']['output'];
  wfrs_id: Scalars['Int']['output'];
  wfs_id: Scalars['Int']['output'];
};

/** Infos des absences des collaborateurs d'un manager */
export type InfosAbsencesMgr = {
  __typename: 'InfosAbsencesMgr';
  annulees: Array<InfosAbsenceMgr>;
  basculees: Array<InfosAbsenceMgr>;
  enAttenteInfos: Array<InfosAbsenceMgr>;
  nonTraitees: Array<InfosAbsenceMgr>;
  rejetees: Array<InfosAbsenceMgr>;
  validees: Array<InfosAbsenceMgr>;
};

export type InfosCntInput = {
  cnt_debut_date?: InputMaybe<Scalars['Date']['input']>;
  cnt_id?: InputMaybe<Scalars['Int']['input']>;
  dpub_id?: InputMaybe<Scalars['Int']['input']>;
  emp_id: Scalars['Int']['input'];
  empc_id?: InputMaybe<Scalars['Int']['input']>;
  eta_id: Scalars['Int']['input'];
  lot_id: Scalars['Int']['input'];
  ncnt_id: Scalars['Int']['input'];
  rcdd_id?: InputMaybe<Scalars['Int']['input']>;
  semp_id: Scalars['Int']['input'];
  src_id_force?: InputMaybe<Scalars['Int']['input']>;
  trem_id?: InputMaybe<Scalars['Int']['input']>;
};

/** Infos des absences des collaborateurs */
export type InfosCollaborateurAbsence = {
  __typename: 'InfosCollaborateurAbsence';
  /** Code de l'absence */
  abs_code: Scalars['String']['output'];
  /** Nombre de jours d'absences */
  abs_nb: Scalars['Float']['output'];
  /** Date de début */
  datedebut: Scalars['Date']['output'];
  /** Date de début (chaine formattée: DD/MM/YYYY) */
  datedebut_desc: Scalars['String']['output'];
  /** Date de fin */
  datefin: Scalars['Date']['output'];
  /** Date de fin (chaine formattée: DD/MM/YYYY) */
  datefin_desc: Scalars['String']['output'];
  /** L'absence fini le matin (si true) */
  datefin_matin: Scalars['Boolean']['output'];
  /** L'absence commence l'après-midi (si true)     */
  debut_aprem: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Type d'absence  (libellé, exemple: "Congés payés")    */
  motif_desc: Scalars['String']['output'];
  /** salarié (Nom) */
  sal_name: Scalars['String']['output'];
  /** Salaré (ID) */
  sal_type: Scalars['String']['output'];
  /** Salaré (ID) */
  salarie_id: Scalars['Int']['output'];
  /** Statut de la demande (libellé, exemple: "Basculé en paie") */
  statut_demande: Scalars['String']['output'];
  /** Statut de la demande (ID) */
  statut_id: Scalars['Int']['output'];
  /** Demande d'origine à l'absence si existe */
  wdm_id: Maybe<Scalars['Int']['output']>;
};

export type InfosDemandesAbsenceSal = {
  __typename: 'InfosDemandesAbsenceSal';
  abs_datedebut: Scalars['String']['output'];
  abs_datefin: Scalars['String']['output'];
  abs_nb: Scalars['Int']['output'];
  absence_heure: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  tab_desc: Scalars['String']['output'];
  wdm_creation_timestamp: Scalars['String']['output'];
  wdm_data: WdmDataDemandeAbs;
  wdm_id: Scalars['Int']['output'];
  wfs_id: Scalars['Int']['output'];
  wft_id: Scalars['Int']['output'];
};

/** Infos des demandes absences des collaborateurs d'un manager */
export type InfosDemandesAbsencesSal = {
  __typename: 'InfosDemandesAbsencesSal';
  annulees: Array<InfosDemandesAbsenceSal>;
  basculeesEnPaie: Array<InfosDemandesAbsenceSal>;
  enAttenteInfos: Array<InfosDemandesAbsenceSal>;
  enCours: Array<InfosDemandesAbsenceSal>;
  rejetees: Array<InfosDemandesAbsenceSal>;
  validees: Array<InfosDemandesAbsenceSal>;
};

export type InfosForValidationAbsence = {
  __typename: 'InfosForValidationAbsence';
  demandeur: DemandeurDesc;
  docs: Maybe<Array<Document>>;
  id: Scalars['ID']['output'];
  nbJoursAbs: Scalars['Float']['output'];
  steps: Array<WflStep>;
  wdm: Wdm;
  wfls: Wfls;
  wfrs: Wfrs;
  wfs: Wfs;
  wft: Wft;
};

export type InfosSepa = {
  __typename: 'InfosSepa';
  id: Scalars['ID']['output'];
  pad_activer_fichier_virement_sepa: Scalars['Boolean']['output'];
  pad_type_virement_salaires_sepa: Scalars['Int']['output'];
};

export type InfosUser = {
  __typename: 'InfosUser';
  uti_id: Scalars['Int']['output'];
  uti_nom: Scalars['String']['output'];
  uti_prenom: Scalars['String']['output'];
  uti_pseudo: Scalars['String']['output'];
};

export type InputCreateEabs = {
  absCommenceAprem: Scalars['Boolean']['input'];
  absFinitMatin: Scalars['Boolean']['input'];
  cntId?: InputMaybe<Scalars['Int']['input']>;
  eabsDateDebut: Scalars['Date']['input'];
  eabsDateFin: Scalars['Date']['input'];
  eabsExternalId?: InputMaybe<Scalars['String']['input']>;
  ecntId?: InputMaybe<Scalars['Int']['input']>;
  files?: InputMaybe<Array<Scalars['Upload']['input']>>;
  nbHeures?: InputMaybe<Scalars['Float']['input']>;
  tabId: Scalars['Int']['input'];
  typeUniteAbsence: Scalars['Int']['input'];
};

export type InputDroitsMaintien = {
  artIdInitial?: InputMaybe<Scalars['Int']['input']>;
  dateDebutArret: Scalars['DateTime']['input'];
  dateFinPrevisArret: Scalars['DateTime']['input'];
  dateRepriseArret?: InputMaybe<Scalars['DateTime']['input']>;
  derJourTravArret: Scalars['DateTime']['input'];
  derJourTravMatinSeulement: Scalars['Boolean']['input'];
  eartIdInitial?: InputMaybe<Scalars['Int']['input']>;
  esalId?: InputMaybe<Scalars['Int']['input']>;
  initOuPro: Scalars['Int']['input'];
  isArretCovid: Scalars['Boolean']['input'];
  martId: Scalars['Int']['input'];
  msalIdChoisi: Scalars['Int']['input'];
  nbjMaintienChoisi?: InputMaybe<Scalars['Int']['input']>;
  salId?: InputMaybe<Scalars['Int']['input']>;
};

export type InputEsdra = {
  esdraData?: InputMaybe<Scalars['JSON']['input']>;
  /** la présence d'esdraId signifie une volonté d'update l'esdra en question */
  esdraId?: InputMaybe<Scalars['Int']['input']>;
  /** Permet de donner une FK pour lier le draft avec une saisie créée depuis celui ci (va de pair avec typeEsdra qui permet d'identifier la table, ECNT/EVVA/MREM...) */
  esdraRelatedPk?: InputMaybe<Scalars['Int']['input']>;
  /** Permet de préciser un statut si souhaité (par défaut "brouillon en cours/non utilisé") */
  esdraStatus?: InputMaybe<Scalars['Int']['input']>;
  typeEsdra?: InputMaybe<Scalars['Int']['input']>;
};

export type InputGetAbsencesPortailExterne = {
  endDate: Scalars['String']['input'];
  lotId: Scalars['Int']['input'];
  startDate: Scalars['String']['input'];
};

export type InputInsertEart = {
  eart_date_accident?: InputMaybe<Scalars['DateTime']['input']>;
  eart_date_fin_previs: Scalars['DateTime']['input'];
  eart_date_reception_employeur?: InputMaybe<Scalars['DateTime']['input']>;
  eart_date_redaction: Scalars['DateTime']['input'];
  eart_date_reprise?: InputMaybe<Scalars['DateTime']['input']>;
  eart_debut_subro?: InputMaybe<Scalars['DateTime']['input']>;
  eart_der_jour_trav?: InputMaybe<Scalars['DateTime']['input']>;
  eart_derogatoire_covid?: InputMaybe<Scalars['Boolean']['input']>;
  eart_djt_matin_seulement: Scalars['Boolean']['input'];
  eart_est_subro: Scalars['Boolean']['input'];
  eart_fin_subro?: InputMaybe<Scalars['DateTime']['input']>;
  eart_init_ou_pro: Scalars['Int']['input'];
  eart_initial_art_id?: InputMaybe<Scalars['Int']['input']>;
  eart_initial_eart_id?: InputMaybe<Scalars['Int']['input']>;
  eart_motif_covid?: InputMaybe<Scalars['Int']['input']>;
  eart_motif_reprise?: InputMaybe<Scalars['Int']['input']>;
  eart_nbj_maintien_choisi?: InputMaybe<Scalars['Int']['input']>;
  eart_reprise_aprem: Scalars['Boolean']['input'];
  esal_id?: InputMaybe<Scalars['Int']['input']>;
  mart_id: Scalars['Int']['input'];
  msal_id_choisi?: InputMaybe<Scalars['Int']['input']>;
  sal_id?: InputMaybe<Scalars['Int']['input']>;
};

export type InputInsertMrem = {
  catc_id?: InputMaybe<Scalars['Int']['input']>;
  cnt_id?: InputMaybe<Scalars['Int']['input']>;
  coeff?: InputMaybe<Scalars['Int']['input']>;
  ech_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_id?: InputMaybe<Scalars['Int']['input']>;
  ect_lib?: InputMaybe<Scalars['String']['input']>;
  emp_id?: InputMaybe<Scalars['Int']['input']>;
  empc_id?: InputMaybe<Scalars['Int']['input']>;
  fil_id?: InputMaybe<Scalars['Int']['input']>;
  mrem_a_quot_trav_specifique?: InputMaybe<Scalars['Boolean']['input']>;
  mrem_custom_profil_planning?: InputMaybe<Array<Scalars['JSON']['input']>>;
  mrem_date_debut?: InputMaybe<Scalars['Date']['input']>;
  mrem_modif_penc?: InputMaybe<Array<Scalars['JSON']['input']>>;
  mrem_montant?: InputMaybe<Scalars['Float']['input']>;
  mrem_nb_heures_supp?: InputMaybe<Scalars['Float']['input']>;
  mrem_ppla_date_debut_cycle?: InputMaybe<Scalars['Date']['input']>;
  mrem_ppla_id_force?: InputMaybe<Scalars['Int']['input']>;
  mrem_prolongation_cdd_date_fin?: InputMaybe<Scalars['Date']['input']>;
  mrem_prtt_id_force?: InputMaybe<Scalars['Int']['input']>;
  mrem_quot_trav?: InputMaybe<Scalars['Float']['input']>;
  mrem_quot_trav_spec_raison?: InputMaybe<Scalars['Int']['input']>;
  mrem_rem_heure_supp_included?: InputMaybe<Scalars['Boolean']['input']>;
  mrem_should_remove_ppla?: InputMaybe<Scalars['Boolean']['input']>;
  mrem_trav_hand_id?: InputMaybe<Scalars['Int']['input']>;
  mrem_type_tps_partiel_cotisant_tps_plein?: InputMaybe<Scalars['Int']['input']>;
  mrem_types?: InputMaybe<Scalars['JSON']['input']>;
  nivc_id?: InputMaybe<Scalars['Int']['input']>;
  src_id?: InputMaybe<Scalars['Int']['input']>;
  trem_id?: InputMaybe<Scalars['Int']['input']>;
};

export type InputInsertTsh = {
  cnt_id: Scalars['Int']['input'];
  tsh_comment?: InputMaybe<Scalars['String']['input']>;
  tsh_date_end: Scalars['Date']['input'];
  tsh_date_start: Scalars['Date']['input'];
};

export type InputMarkAsRead = {
  ntifIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type InputUpdateMrem = {
  catc_id?: InputMaybe<Scalars['Int']['input']>;
  coeff?: InputMaybe<Scalars['Int']['input']>;
  ech_id?: InputMaybe<Scalars['Int']['input']>;
  ect_lib?: InputMaybe<Scalars['String']['input']>;
  emp_id?: InputMaybe<Scalars['Int']['input']>;
  empc_id?: InputMaybe<Scalars['Int']['input']>;
  fil_id?: InputMaybe<Scalars['Int']['input']>;
  mrem_a_quot_trav_specifique?: InputMaybe<Scalars['Boolean']['input']>;
  mrem_custom_profil_planning?: InputMaybe<Array<Scalars['JSON']['input']>>;
  mrem_date_debut?: InputMaybe<Scalars['Date']['input']>;
  mrem_id: Scalars['Int']['input'];
  mrem_modif_penc?: InputMaybe<Array<Scalars['JSON']['input']>>;
  mrem_montant?: InputMaybe<Scalars['Float']['input']>;
  mrem_nb_heures_supp?: InputMaybe<Scalars['Float']['input']>;
  mrem_ppla_date_debut_cycle?: InputMaybe<Scalars['Date']['input']>;
  mrem_ppla_id_force?: InputMaybe<Scalars['Int']['input']>;
  mrem_prolongation_cdd_date_fin?: InputMaybe<Scalars['Date']['input']>;
  mrem_prtt_id_force?: InputMaybe<Scalars['Int']['input']>;
  mrem_quot_trav?: InputMaybe<Scalars['Float']['input']>;
  mrem_quot_trav_spec_raison?: InputMaybe<Scalars['Int']['input']>;
  mrem_rem_heure_supp_included?: InputMaybe<Scalars['Boolean']['input']>;
  mrem_should_remove_ppla?: InputMaybe<Scalars['Boolean']['input']>;
  mrem_trav_hand_id?: InputMaybe<Scalars['Int']['input']>;
  mrem_type_tps_partiel_cotisant_tps_plein?: InputMaybe<Scalars['Int']['input']>;
  mrem_types?: InputMaybe<Scalars['JSON']['input']>;
  nivc_id?: InputMaybe<Scalars['Int']['input']>;
  src_id?: InputMaybe<Scalars['Int']['input']>;
  trem_id?: InputMaybe<Scalars['Int']['input']>;
};

export type InputUpsertPta = {
  cnt_id: Scalars['Int']['input'];
  pta_comment?: InputMaybe<Scalars['String']['input']>;
  pta_date: Scalars['Date']['input'];
  pta_heure_arrivee?: InputMaybe<Scalars['String']['input']>;
  pta_heure_depart?: InputMaybe<Scalars['String']['input']>;
  pta_pause1_debut?: InputMaybe<Scalars['String']['input']>;
  pta_pause1_fin?: InputMaybe<Scalars['String']['input']>;
  pta_pause2_debut?: InputMaybe<Scalars['String']['input']>;
  pta_pause2_fin?: InputMaybe<Scalars['String']['input']>;
  pta_pause3_debut?: InputMaybe<Scalars['String']['input']>;
  pta_pause3_fin?: InputMaybe<Scalars['String']['input']>;
  pta_presence_aprem?: InputMaybe<Scalars['Boolean']['input']>;
  pta_presence_journee?: InputMaybe<Scalars['Boolean']['input']>;
  pta_presence_matin?: InputMaybe<Scalars['Boolean']['input']>;
  pta_working_place?: InputMaybe<Scalars['Int']['input']>;
  pta_working_place_comment?: InputMaybe<Scalars['String']['input']>;
};

export type InputVcalStatus = {
  comment?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['Int']['input'];
  vcalId: Scalars['Int']['input'];
};

export type InsertEcntInput = {
  acrd_id?: InputMaybe<Scalars['Int']['input']>;
  aff_id?: InputMaybe<Scalars['Int']['input']>;
  catc_id?: InputMaybe<Scalars['Int']['input']>;
  cdpre_id?: InputMaybe<Scalars['Int']['input']>;
  coeff?: InputMaybe<Scalars['Int']['input']>;
  dpub_id?: InputMaybe<Scalars['Int']['input']>;
  ech_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_a_quot_trav_specifique?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_acompte_mdp_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_alternance_has_salaire_fixe?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_alternance_motif_derog?: InputMaybe<Scalars['String']['input']>;
  ecnt_alternance_periodes?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ecnt_cappr_code_niveau_diplome_prepare?: InputMaybe<Scalars['String']['input']>;
  ecnt_cdpre_date_fin?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_cprev_adhesions?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ecnt_cumul_emploi_retraite: Scalars['Boolean']['input'];
  ecnt_custom_profil_planning?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ecnt_date_envoi?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_date_reception?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_datefin_alternance?: InputMaybe<Scalars['Date']['input']>;
  ecnt_datefin_duree_minimale?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_datefin_essai?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_datefin_essai_renouv?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_datefin_prevue?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_debut_date: Scalars['DateTime']['input'];
  ecnt_debut_periode_souplesse?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_dpae_choix_transmission?: InputMaybe<Scalars['Int']['input']>;
  ecnt_dpae_dateheure_gene?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_est_tauxat_support?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_fin_date?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_fin_periode_souplesse?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_has_periode_essai: Scalars['Boolean']['input'];
  ecnt_heure_embauche?: InputMaybe<Scalars['String']['input']>;
  ecnt_heure_embauche_reelle?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_heure_fin?: InputMaybe<Scalars['String']['input']>;
  ecnt_heure_supp: Scalars['Float']['input'];
  ecnt_is_stage_rem?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_justif_recours_cdd?: InputMaybe<Scalars['String']['input']>;
  ecnt_montant_salaire?: InputMaybe<Scalars['Float']['input']>;
  ecnt_nb_heures_decla_jour_solidarite?: InputMaybe<Scalars['Float']['input']>;
  ecnt_notes?: InputMaybe<Scalars['String']['input']>;
  ecnt_num?: InputMaybe<Scalars['String']['input']>;
  ecnt_penc?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ecnt_ppla_date_debut_cycle?: InputMaybe<Scalars['Date']['input']>;
  ecnt_prev_dispense_date_fin?: InputMaybe<Scalars['Date']['input']>;
  ecnt_prev_dispense_motif_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_pro_niveau_etude?: InputMaybe<Scalars['Int']['input']>;
  ecnt_quot_trav?: InputMaybe<Scalars['Float']['input']>;
  ecnt_quot_trav_spec_raison?: InputMaybe<Scalars['Int']['input']>;
  ecnt_rem_heure_supp_included?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_rempla_sal_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_rempla_sal_libre?: InputMaybe<Scalars['String']['input']>;
  ecnt_sal_anciennete_date?: InputMaybe<Scalars['Date']['input']>;
  ecnt_salaire_mdp_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_sans_terme_precis?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_soldetc_mdp_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_stage_nb_heures?: InputMaybe<Scalars['Float']['input']>;
  ecnt_type_decla_jour_solidarite?: InputMaybe<Scalars['Int']['input']>;
  ecnt_type_saisie_salaire: Scalars['Int']['input'];
  ecnt_type_tps_partiel_cotisant_tps_plein?: InputMaybe<Scalars['Int']['input']>;
  ecnt_vme_future_date?: InputMaybe<Scalars['Date']['input']>;
  ecnt_vme_passee_date?: InputMaybe<Scalars['Date']['input']>;
  ect_lib?: InputMaybe<Scalars['String']['input']>;
  emp_id?: InputMaybe<Scalars['Int']['input']>;
  empc_id?: InputMaybe<Scalars['Int']['input']>;
  esal_id?: InputMaybe<Scalars['Int']['input']>;
  eta_id: Scalars['Int']['input'];
  euti_id?: InputMaybe<Scalars['Int']['input']>;
  fil_id?: InputMaybe<Scalars['Int']['input']>;
  lot_id: Scalars['Int']['input'];
  mnvi_id?: InputMaybe<Scalars['Int']['input']>;
  ncnt_id: Scalars['Int']['input'];
  nivc_id?: InputMaybe<Scalars['Int']['input']>;
  pacp_id_force?: InputMaybe<Scalars['Int']['input']>;
  pare_id_force?: InputMaybe<Scalars['Int']['input']>;
  pcpa_id_force?: InputMaybe<Scalars['Int']['input']>;
  ppla_id_force?: InputMaybe<Scalars['Int']['input']>;
  prtt_id_force?: InputMaybe<Scalars['Int']['input']>;
  rcdd_id?: InputMaybe<Scalars['Int']['input']>;
  sal_id?: InputMaybe<Scalars['Int']['input']>;
  sal_id_tuteur?: InputMaybe<Scalars['Int']['input']>;
  src_id?: InputMaybe<Scalars['Int']['input']>;
  src_id_force?: InputMaybe<Scalars['Int']['input']>;
  trem_id?: InputMaybe<Scalars['Int']['input']>;
  uorg_id?: InputMaybe<Scalars['Int']['input']>;
};

export type InsertEdepInput = {
  cnt_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_id?: InputMaybe<Scalars['Int']['input']>;
  edep_a_indem_fin_cdd?: InputMaybe<Scalars['Boolean']['input']>;
  edep_cfc_dep_vol_mnt?: InputMaybe<Scalars['Float']['input']>;
  edep_cfc_mis_retraite?: InputMaybe<Scalars['Float']['input']>;
  edep_contrepartie_non_concurrence?: InputMaybe<Scalars['Float']['input']>;
  edep_csp_mnt_indem_preavis?: InputMaybe<Scalars['Float']['input']>;
  edep_csp_nb_mois_preavis?: InputMaybe<Scalars['Float']['input']>;
  edep_date_fin: Scalars['DateTime']['input'];
  edep_date_notification?: InputMaybe<Scalars['DateTime']['input']>;
  edep_date_paiement?: InputMaybe<Scalars['DateTime']['input']>;
  edep_der_jour_trav?: InputMaybe<Scalars['DateTime']['input']>;
  edep_duree_non_concurrence?: InputMaybe<Scalars['Int']['input']>;
  edep_indemnite_dep_ret_vol_mnt?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_fin_mandat?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_mise_ret_non_soum?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_rupture_conv?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_rupture_legale?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_rupture_totale?: InputMaybe<Scalars['Float']['input']>;
  edep_lic_date_eng_procedure?: InputMaybe<Scalars['DateTime']['input']>;
  edep_mtf_cplt_id?: InputMaybe<Scalars['Int']['input']>;
  edep_peut_beneficier_pension_retraite?: InputMaybe<Scalars['Boolean']['input']>;
  edep_preavis_fait: Scalars['Boolean']['input'];
  edep_preavis_noneffnonpaye: Scalars['Boolean']['input'];
  edep_preavis_noneffnonpaye_datedebut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavis_noneffnonpaye_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavis_noneffpaye: Scalars['Boolean']['input'];
  edep_preavis_noneffpaye_datedebut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavis_noneffpaye_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavisfait_date_debut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavisfait_date_fin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_prevenance_effpaye: Scalars['Boolean']['input'];
  edep_prevenance_effpaye_datedebut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_prevenance_effpaye_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_prevenance_noneffpaye: Scalars['Boolean']['input'];
  edep_prevenance_noneffpaye_datedebut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_prevenance_noneffpaye_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_remboursement_dedit_formation?: InputMaybe<Scalars['Float']['input']>;
  edep_rupconv_date_signature?: InputMaybe<Scalars['DateTime']['input']>;
  edep_sdtc_mdp_id: Scalars['Int']['input'];
  edep_transaction_montant?: InputMaybe<Scalars['Float']['input']>;
  edep_transaction_statut?: InputMaybe<Scalars['Int']['input']>;
  edep_vehicule_fonction?: InputMaybe<Scalars['Boolean']['input']>;
  mnvi_id?: InputMaybe<Scalars['Int']['input']>;
  mtf_id: Scalars['Int']['input'];
};

export type InsertEsalInput = {
  esal_adresse_codepostal: Scalars['String']['input'];
  esal_adresse_commune_nom: Scalars['String']['input'];
  esal_adresse_constr_cplt?: InputMaybe<Scalars['String']['input']>;
  esal_adresse_pays_id?: InputMaybe<Scalars['Int']['input']>;
  esal_adresse_voie_cplt?: InputMaybe<Scalars['String']['input']>;
  esal_adresse_voie_desc: Scalars['String']['input'];
  esal_bnqs_bic?: InputMaybe<Scalars['String']['input']>;
  esal_bnqs_domic?: InputMaybe<Scalars['String']['input']>;
  esal_bnqs_iban?: InputMaybe<Scalars['String']['input']>;
  esal_bnqs_titu?: InputMaybe<Scalars['String']['input']>;
  esal_email?: InputMaybe<Scalars['String']['input']>;
  esal_matricule?: InputMaybe<Scalars['String']['input']>;
  esal_naissance_commune_nom: Scalars['String']['input'];
  esal_naissance_date: Scalars['Date']['input'];
  esal_naissance_pays_id?: InputMaybe<Scalars['Int']['input']>;
  esal_nationalite_id?: InputMaybe<Scalars['Int']['input']>;
  esal_nir: Scalars['String']['input'];
  esal_nir_cle: Scalars['String']['input'];
  esal_nom_famille: Scalars['String']['input'];
  esal_nom_usage: Scalars['String']['input'];
  esal_prenom: Scalars['String']['input'];
  esal_prenoms_etat_civil?: InputMaybe<Scalars['String']['input']>;
  esal_sexe?: InputMaybe<Scalars['Int']['input']>;
  esal_tel_1?: InputMaybe<Scalars['String']['input']>;
  esal_tel_2?: InputMaybe<Scalars['String']['input']>;
  esal_trav_hand_date_reco?: InputMaybe<Scalars['Date']['input']>;
  esal_trav_hand_id?: InputMaybe<Scalars['Int']['input']>;
  esal_ttra_date_emission?: InputMaybe<Scalars['DateTime']['input']>;
  esal_ttra_date_fin_validite?: InputMaybe<Scalars['DateTime']['input']>;
  esal_ttra_lieu_delivr?: InputMaybe<Scalars['String']['input']>;
  esal_ttra_nom_administration?: InputMaybe<Scalars['String']['input']>;
  esal_ttra_num?: InputMaybe<Scalars['String']['input']>;
  esal_ttra_renouv?: InputMaybe<Scalars['Boolean']['input']>;
  esal_tytr_id?: InputMaybe<Scalars['Int']['input']>;
  mdp_id?: InputMaybe<Scalars['Int']['input']>;
};

export type InsertTtraInput = {
  sal_id: Scalars['Int']['input'];
  ttra_date_emission: Scalars['Date']['input'];
  ttra_date_fin_validite: Scalars['Date']['input'];
  ttra_lieu_delivr?: InputMaybe<Scalars['String']['input']>;
  ttra_nom_administration?: InputMaybe<Scalars['String']['input']>;
  ttra_num?: InputMaybe<Scalars['String']['input']>;
  ttra_renouv: Scalars['Boolean']['input'];
  tytr_id: Scalars['Int']['input'];
};

export type InsertVmeInput = {
  esal_id?: InputMaybe<Scalars['Int']['input']>;
  org_id?: InputMaybe<Scalars['Int']['input']>;
  sal_id?: InputMaybe<Scalars['Int']['input']>;
  tvme_id: Scalars['Int']['input'];
  vme_attestation_vip_statut?: InputMaybe<Scalars['Int']['input']>;
  vme_date: Scalars['Date']['input'];
  vme_notes?: InputMaybe<Scalars['String']['input']>;
  vme_resultat_aptitude?: InputMaybe<Scalars['Int']['input']>;
  vme_statut: Scalars['Int']['input'];
  vme_type_motif_reprise?: InputMaybe<Scalars['Int']['input']>;
};

/** Jour de planning hebdomadaire */
export type Jph = {
  __typename: 'Jph';
  id: Scalars['ID']['output'];
  jph_heure_aprem_debut: Maybe<Scalars['String']['output']>;
  jph_heure_aprem_fin: Maybe<Scalars['String']['output']>;
  jph_heure_matin_debut: Maybe<Scalars['String']['output']>;
  jph_heure_matin_fin: Maybe<Scalars['String']['output']>;
  jph_id: Scalars['Int']['output'];
  jph_nb_h_trav_aprem: Maybe<Scalars['Float']['output']>;
  jph_nb_h_trav_matin: Maybe<Scalars['Float']['output']>;
  jph_num_jour: Scalars['Int']['output'];
  jph_type_journee: Scalars['Int']['output'];
  plh_id: Scalars['Int']['output'];
};

export type LastRem = {
  __typename: 'LastRem';
  id: Scalars['ID']['output'];
  isTempsPartiel: Scalars['Boolean']['output'];
  montantSalaire: Maybe<Scalars['Float']['output']>;
  tempsTravail: Scalars['Float']['output'];
  tempsTravailDesc: Scalars['String']['output'];
  /** 1 = montant mensuel 2 = taux horaire */
  typeMontantSalaire: Maybe<Scalars['Int']['output']>;
  /** Uniquement pour les temps partiels */
  typeTpsPartielCotisantTpsPlein: Maybe<Scalars['Int']['output']>;
};

export type Liv = {
  __typename: 'Liv';
  aeta_type: Scalars['Int']['output'];
  bul: Maybe<Bul>;
  cnt_id: Maybe<Scalars['Int']['output']>;
  epac: Maybe<Epac>;
  /** code de l'étab (ex : SIEGE) affilié au livrable si tel est le cas */
  eta_code: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liv_datetime_creation: Scalars['DateTime']['output'];
  liv_emp_can_upsert_vliv: Scalars['Boolean']['output'];
  liv_filename: Scalars['String']['output'];
  liv_generation_criterias: Maybe<Scalars['JSON']['output']>;
  liv_id: Scalars['Int']['output'];
  liv_is_displayed_salarie: Scalars['Boolean']['output'];
  liv_lib_perso: Maybe<Scalars['String']['output']>;
  liv_origin: Scalars['Int']['output'];
  liv_output_type: Scalars['Int']['output'];
  liv_periode_debut: Maybe<Scalars['Int']['output']>;
  liv_periode_fin: Maybe<Scalars['Int']['output']>;
  liv_type: Scalars['Int']['output'];
  liv_type_periodicite: Scalars['Int']['output'];
  /** #Do not exists in Liv */
  loli: Maybe<Loli>;
  loli_id: Scalars['Int']['output'];
  /** code du lot(ex : MENS) affilié au livrable si tel est le cas */
  lot_code: Maybe<Scalars['String']['output']>;
  lot_id: Maybe<Scalars['Int']['output']>;
  sal: Maybe<Sal>;
  vliv: Maybe<Vliv>;
};

export type LivExplanation = {
  __typename: 'LivExplanation';
  explanation: Maybe<LivExplanationDescription>;
  id: Scalars['ID']['output'];
  liv_type: Scalars['Int']['output'];
};

export type LivExplanationDescription = {
  __typename: 'LivExplanationDescription';
  content: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type Loli = {
  __typename: 'Loli';
  ceta_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  loli_comment: Maybe<Scalars['String']['output']>;
  loli_datetime_creation: Scalars['DateTime']['output'];
  loli_est_version_def: Scalars['Boolean']['output'];
  loli_id: Scalars['Int']['output'];
  loli_peri_anneemois: Scalars['Int']['output'];
  loli_version: Scalars['Int']['output'];
  loli_visible_employeur: Scalars['Boolean']['output'];
  loli_zendesk_issue_id: Maybe<Scalars['Int']['output']>;
  pad_id: Scalars['Int']['output'];
  uti_id_createur: Scalars['Int']['output'];
};

export type Lot = {
  __typename: 'Lot';
  id: Scalars['ID']['output'];
  lot_code: Scalars['String']['output'];
  lot_contrats_nb_jrs_max_consecutifs: Maybe<Scalars['Int']['output']>;
  lot_id: Scalars['Int']['output'];
  lot_libelle: Scalars['String']['output'];
  ncnt_id_defaut: Maybe<Scalars['Int']['output']>;
  pad: Maybe<PadDesc>;
  pad_id: Scalars['Int']['output'];
  /** Do no exist in Lot */
  ppa: Maybe<Ppa>;
  ppa_courante_bloquee: Scalars['Boolean']['output'];
  ppa_id_courante: Maybe<Scalars['Int']['output']>;
};

export type Manager = {
  __typename: 'Manager';
  email: Maybe<Scalars['String']['output']>;
  nom: Scalars['String']['output'];
  prenom: Scalars['String']['output'];
  sal_id: Scalars['Int']['output'];
  uorg_id: Scalars['Int']['output'];
  uti_id: Scalars['Int']['output'];
};

export type Mart = {
  __typename: 'Mart';
  id: Scalars['ID']['output'];
  mart_code: Scalars['String']['output'];
  mart_dsn_code: Scalars['String']['output'];
  mart_id: Scalars['Int']['output'];
  mart_lib: Scalars['String']['output'];
};

/** Mode de paiement */
export type Mdp = {
  __typename: 'Mdp';
  id: Scalars['ID']['output'];
  /** Code */
  mdp_code: Scalars['String']['output'];
  mdp_id: Scalars['Int']['output'];
  /** Libellé */
  mdp_libelle: Scalars['String']['output'];
  /** Mode de paiement pour des opérations hors espèce(si true) */
  mdp_paiement_ops: Scalars['Boolean']['output'];
  /** Mode de paiement disponible pour les salariés */
  mdp_paiement_sal: Scalars['Boolean']['output'];
};

export type MenuParam = {
  __typename: 'MenuParam';
  ace_type: Maybe<Scalars['Int']['output']>;
  men_id_front: Maybe<Scalars['String']['output']>;
  men_lib: Maybe<Scalars['String']['output']>;
};

export type MinStageGratificationInput = {
  ecnt_debut_date: Scalars['Date']['input'];
  ecnt_fin_date: Scalars['Date']['input'];
};

export type Mnvi = {
  __typename: 'Mnvi';
  id: Scalars['ID']['output'];
  mnvi_comments: Maybe<Scalars['String']['output']>;
  mnvi_id: Scalars['Int']['output'];
  mnvi_lib: Scalars['String']['output'];
};

export type ModuleSettings = {
  __typename: 'ModuleSettings';
  prui_id: Scalars['Int']['output'];
  pwdg_closable: Scalars['Boolean']['output'];
  pwdg_id: Scalars['Int']['output'];
  pwdg_max_width: Maybe<Scalars['Int']['output']>;
  pwdg_min_width: Maybe<Scalars['Int']['output']>;
  pwdg_movable: Scalars['Boolean']['output'];
  pwdg_rank: Maybe<Scalars['Int']['output']>;
  pwdg_resizable: Scalars['Boolean']['output'];
  pwdg_title: Maybe<Scalars['String']['output']>;
  wid_activable_manager: Scalars['Boolean']['output'];
  wid_activable_salarie: Scalars['Boolean']['output'];
  wid_category: Scalars['String']['output'];
  wid_id: Maybe<Scalars['Int']['output']>;
  wid_max_width_default: Maybe<Scalars['Int']['output']>;
  wid_min_width_default: Maybe<Scalars['Int']['output']>;
  wid_name: Scalars['String']['output'];
  wid_rank_default: Maybe<Scalars['Int']['output']>;
  wid_title: Scalars['String']['output'];
};

export type Mqts = {
  __typename: 'Mqts';
  id: Scalars['ID']['output'];
  mqts_id: Scalars['Int']['output'];
  mqts_lib: Maybe<Scalars['String']['output']>;
};

export type Mrem = {
  __typename: 'Mrem';
  catc_id: Maybe<Scalars['Int']['output']>;
  cdc: Maybe<Array<CdcForEsaiPeri>>;
  /** #Do not exists in pad */
  cnt: Maybe<Cnt>;
  cnt_id: Maybe<Scalars['Int']['output']>;
  coeff: Maybe<Scalars['Int']['output']>;
  ech_id: Maybe<Scalars['Int']['output']>;
  ecnt: Maybe<Ecnt>;
  ecnt_id: Maybe<Scalars['Int']['output']>;
  ect_lib: Maybe<Scalars['String']['output']>;
  emp_id: Maybe<Scalars['Int']['output']>;
  empc_id: Maybe<Scalars['Int']['output']>;
  esai_id: Scalars['Int']['output'];
  fil_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mrem_a_quot_trav_specifique: Maybe<Scalars['Boolean']['output']>;
  mrem_custom_profil_planning: Maybe<Array<Scalars['JSON']['output']>>;
  mrem_date_debut: Maybe<Scalars['Date']['output']>;
  mrem_id: Scalars['Int']['output'];
  /** Ajout / Modification de facteurs de pénibiltiés - Exemple : [{ penc_id: Int, fpeb_id: Int!, penc_datedebut: Date!, penc_datefin: Date }] */
  mrem_modif_penc: Maybe<Array<Scalars['JSON']['output']>>;
  mrem_montant: Maybe<Scalars['Float']['output']>;
  mrem_nb_heures_supp: Maybe<Scalars['Float']['output']>;
  mrem_ppla_date_debut_cycle: Maybe<Scalars['Date']['output']>;
  mrem_ppla_id_force: Maybe<Scalars['Int']['output']>;
  mrem_prolongation_cdd_date_fin: Maybe<Scalars['Date']['output']>;
  mrem_prtt_id_force: Maybe<Scalars['Int']['output']>;
  mrem_quot_trav: Maybe<Scalars['Float']['output']>;
  mrem_quot_trav_spec_raison: Maybe<Scalars['Int']['output']>;
  mrem_rem_heure_supp_included: Maybe<Scalars['Boolean']['output']>;
  mrem_should_remove_ppla: Scalars['Boolean']['output'];
  mrem_trav_hand_id: Maybe<Scalars['Int']['output']>;
  /** Si le salarié passe en temps partiel, alors on précise le type de cotisation */
  mrem_type_tps_partiel_cotisant_tps_plein: Maybe<Scalars['Int']['output']>;
  mrem_types: Maybe<Scalars['JSON']['output']>;
  nivc_id: Maybe<Scalars['Int']['output']>;
  src_id: Maybe<Scalars['Int']['output']>;
  trem_id: Maybe<Scalars['Int']['output']>;
};

export type Msal = {
  __typename: 'Msal';
  acrd_desc: Maybe<Scalars['String']['output']>;
  acrd_id: Scalars['Int']['output'];
  /** #Do not exist in Msal */
  acrd_lib: Maybe<Scalars['String']['output']>;
  acrd_niveau: Maybe<Scalars['Int']['output']>;
  /** array tel que[{ cmsal_id, cmsal_desc }] */
  conditions: Maybe<Array<Scalars['JSON']['output']>>;
  id: Scalars['ID']['output'];
  mart_ids: Maybe<Array<Scalars['Int']['output']>>;
  motifs_desc: Maybe<Scalars['String']['output']>;
  msal_carence_nbj: Scalars['Int']['output'];
  msal_carence_plafond_nb: Maybe<Scalars['Int']['output']>;
  msal_carence_plafond_type: Scalars['Int']['output'];
  msal_carence_plancher_nb: Maybe<Scalars['Int']['output']>;
  msal_carence_plancher_type: Scalars['Int']['output'];
  msal_desc: Maybe<Scalars['String']['output']>;
  msal_id: Scalars['Int']['output'];
  msal_nature: Maybe<Scalars['Int']['output']>;
  msal_nature_desc: Maybe<Scalars['String']['output']>;
  msal_peridebut: Maybe<Scalars['Int']['output']>;
  msal_perifin: Maybe<Scalars['Int']['output']>;
  msal_pouvoir_saisir_nbj_maintien: Scalars['Boolean']['output'];
  msal_saisie_nbj_maintien_max: Maybe<Scalars['Int']['output']>;
  msal_saisie_nbj_maintien_min: Maybe<Scalars['Int']['output']>;
  msal_type_mart: Scalars['Int']['output'];
  msal_type_peria: Scalars['Int']['output'];
  msal_type_periode_ref: Scalars['Int']['output'];
  peria_desc: Maybe<Scalars['String']['output']>;
  peria_id: Maybe<Scalars['Int']['output']>;
};

/** Motif fin de contrat */
export type Mtf = {
  __typename: 'Mtf';
  /** Does not exist in Mtf */
  category: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mfa_id_defaut: Maybe<Scalars['Int']['output']>;
  mfp_id_defaut: Maybe<Scalars['Int']['output']>;
  /** Code */
  mtf_code: Scalars['String']['output'];
  /** Code DSN */
  mtf_dsn_code: Maybe<Scalars['String']['output']>;
  /** Description du motif à destination de l'employeur */
  mtf_explication_employeur: Maybe<Scalars['String']['output']>;
  mtf_id: Scalars['Int']['output'];
  /** Libellé */
  mtf_libelle: Scalars['String']['output'];
};

/** Motif fin de contrat avec configurations */
export type MtfCfg = {
  __typename: 'MtfCfg';
  has_date_engagement_procedure: Scalars['Boolean']['output'];
  /** Does not exist in Mtf */
  has_date_notification: Scalars['Boolean']['output'];
  has_delai_prevenance_applicable: Scalars['Boolean']['output'];
  has_preavis_applicable: Scalars['Boolean']['output'];
  is_clause_dedit_formation_applicable: Scalars['Boolean']['output'];
  is_clause_non_concurrence_applicable: Scalars['Boolean']['output'];
  is_date_dernier_jour_travaille_applicable: Scalars['Boolean']['output'];
  mtf: Mtf;
};

/** Login / Connection à l'application */
export type Mutation = {
  __typename: 'Mutation';
  cancelDelegationValidationMgr: Scalars['Boolean']['output'];
  cancelDemande: Scalars['ID']['output'];
  changePasswordWithJwt: InfosUser;
  changeStatusRunnedStep: Array<InfosForValidationAbsence>;
  changeStatusRunnedStepDemandeAdm: Array<Wdm>;
  checkAppSessionId: User;
  createBatchEabs: Array<Eabs>;
  createDemandeAdmin: Array<Scalars['String']['output']>;
  createEabs: Eabs;
  createEvvas: Array<Evva>;
  createRequestZd: Scalars['Int']['output'];
  createUti: Uti;
  deleteEabs: Eabs;
  deleteEart: Eart;
  deleteEcnt: Ecnt;
  deleteEdep: Edep;
  deleteEsal: Esal;
  deleteEsdiv: Esdiv;
  deleteEsdra: Esdra;
  /** deleteEvva() peux ne pas renvoyer d'evva dans le cas où le module tente de supprimer une saisie basculée ce qui va créer un esai d'annule et remplace (c'est alors le gestionnaire qui basculera l'esai ce qui supprimera la saisie) */
  deleteEvva: Maybe<Evva>;
  deleteMrem: Mrem;
  deleteTtra: Ttra;
  deleteUct: Uct;
  deleteVme: Vme;
  generateVirement: Liv;
  insertEart: Eart;
  insertEcnt: Ecnt;
  insertEdep: Edep;
  insertEsal: Esal;
  insertMrem: Mrem;
  insertTsh: Tsh;
  insertTtra: Ttra;
  insertVme: Vme;
  login: User;
  markAsRead: Array<Ntif>;
  recoverPassword: Maybe<Scalars['String']['output']>;
  saveDocs: Array<Scalars['String']['output']>;
  selectFolder: Maybe<SelectedFolder>;
  selectRole: Maybe<Scalars['Int']['output']>;
  sendMailGenerationPassword: Maybe<Scalars['String']['output']>;
  setLivsToDisplayToSalaries: Array<Liv>;
  setVcalsStatus: Array<Vcal>;
  updateEabs: Eabs;
  updateEart: Eart;
  updateEcnt: Ecnt;
  updateEdep: Edep;
  updateEsal: Esal;
  updateEvva: Evva;
  updateMrem: Mrem;
  updatePassword: Maybe<Scalars['String']['output']>;
  updatePessta: Pessta;
  updateTtra: Ttra;
  updateUti: Uti;
  updateVme: Vme;
  upsertAccess: Scalars['Boolean']['output'];
  upsertAvatar: Scalars['Boolean']['output'];
  upsertDelegationValidationMgr: Scalars['Boolean']['output'];
  upsertEpacs: Array<Epac>;
  /** La présence de esdivId signifie que c'est un update et non pas un insert */
  upsertEsdiv: Esdiv;
  /** Permet d'upserter des saisies employeurs en draft dans la base de donnée pour être reprises plus tard */
  upsertEsdras: Array<Esdra>;
  upsertPta: Pta;
  upsertUcts: Array<Uct>;
  upsertVlivsStatus: Array<Vliv>;
  validateLotsSaisies: Array<Esai>;
  validateLotsSaisiesAetas: Array<Esai>;
  validateTimesheet: Tsh;
};


/** Login / Connection à l'application */
export type MutationcancelDemandeArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  wdmId: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationchangePasswordWithJwtArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


/** Login / Connection à l'application */
export type MutationchangeStatusRunnedStepArgs = {
  wfrsComment?: InputMaybe<Scalars['String']['input']>;
  wfrsIds: Array<Scalars['ID']['input']>;
  wfrsStatus: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationchangeStatusRunnedStepDemandeAdmArgs = {
  wfrsComment?: InputMaybe<Scalars['String']['input']>;
  wfrsIds: Array<Scalars['Int']['input']>;
  wfrsStatus: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationcheckAppSessionIdArgs = {
  appSessionId: Scalars['String']['input'];
};


/** Login / Connection à l'application */
export type MutationcreateBatchEabsArgs = {
  inputCreateBatchEabs: Array<InputCreateEabs>;
};


/** Login / Connection à l'application */
export type MutationcreateDemandeAdminArgs = {
  data: Scalars['JSON']['input'];
  files: Array<Scalars['Upload']['input']>;
  typeWorkflow: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationcreateEabsArgs = {
  inputCreateEabs: InputCreateEabs;
  lotId: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationcreateEvvasArgs = {
  createEvvasInput: Array<CreateEvvasInput>;
  origineSaisie?: InputMaybe<Scalars['Int']['input']>;
};


/** Login / Connection à l'application */
export type MutationcreateRequestZdArgs = {
  requestZdInput: RequestZdInput;
};


/** Login / Connection à l'application */
export type MutationcreateUtiArgs = {
  createUtiParams: CreateUtiParams;
};


/** Login / Connection à l'application */
export type MutationdeleteEabsArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteEartArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteEcntArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteEdepArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteEsalArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteEsdivArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteEsdraArgs = {
  esdraId: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteEvvaArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteMremArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteTtraArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteUctArgs = {
  uctId: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationdeleteVmeArgs = {
  id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationgenerateVirementArgs = {
  generateVirementInput: GenerateVirementInput;
};


/** Login / Connection à l'application */
export type MutationinsertEartArgs = {
  autoValidate?: InputMaybe<Scalars['Boolean']['input']>;
  files?: InputMaybe<Array<Scalars['Upload']['input']>>;
  inputInsertEart: InputInsertEart;
};


/** Login / Connection à l'application */
export type MutationinsertEcntArgs = {
  createEvvasInput: Array<CreateEvvasInput>;
  insertEcntInput: InsertEcntInput;
  insertEsalInput?: InputMaybe<InsertEsalInput>;
  updateBnqsSal?: InputMaybe<UpdateBnqs>;
};


/** Login / Connection à l'application */
export type MutationinsertEdepArgs = {
  insertEdepInput: InsertEdepInput;
  lot_id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationinsertEsalArgs = {
  insertEsalInput: InsertEsalInput;
  lot_id: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationinsertMremArgs = {
  inputInsertMrem: InputInsertMrem;
  lotId: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationinsertTshArgs = {
  inputInsertTsh: InputInsertTsh;
};


/** Login / Connection à l'application */
export type MutationinsertTtraArgs = {
  insertTtraInput: InsertTtraInput;
};


/** Login / Connection à l'application */
export type MutationinsertVmeArgs = {
  additionnalVmeToCreate?: InputMaybe<InsertVmeInput>;
  files: Array<Scalars['Upload']['input']>;
  insertVmeInput: InsertVmeInput;
};


/** Login / Connection à l'application */
export type MutationloginArgs = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** Login / Connection à l'application */
export type MutationmarkAsReadArgs = {
  inputMarkAsRead: InputMarkAsRead;
};


/** Login / Connection à l'application */
export type MutationrecoverPasswordArgs = {
  email: Scalars['String']['input'];
};


/** Login / Connection à l'application */
export type MutationsaveDocsArgs = {
  docsToSave: Array<DocToSaveInput>;
};


/** Login / Connection à l'application */
export type MutationselectFolderArgs = {
  padId: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationselectRoleArgs = {
  type: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationsendMailGenerationPasswordArgs = {
  utiId: Scalars['Int']['input'];
};


/** Login / Connection à l'application */
export type MutationsetLivsToDisplayToSalariesArgs = {
  livIds: Array<Scalars['Int']['input']>;
  shouldDisplay: Scalars['Boolean']['input'];
};


/** Login / Connection à l'application */
export type MutationsetVcalsStatusArgs = {
  inputVcalsStatus: Array<InputVcalStatus>;
};


/** Login / Connection à l'application */
export type MutationupdateEabsArgs = {
  updateEabsInput: UpdateEabsInput;
};


/** Login / Connection à l'application */
export type MutationupdateEartArgs = {
  autoValidate?: InputMaybe<Scalars['Boolean']['input']>;
  files?: InputMaybe<Array<Scalars['Upload']['input']>>;
  updateEartInput: UpdateEartInput;
};


/** Login / Connection à l'application */
export type MutationupdateEcntArgs = {
  updateBnqs?: InputMaybe<UpdateBnqs>;
  updateEcntInput: UpdateEcntInput;
};


/** Login / Connection à l'application */
export type MutationupdateEdepArgs = {
  updateEdepInput: UpdateEdepInput;
};


/** Login / Connection à l'application */
export type MutationupdateEsalArgs = {
  updateEsalInput: UpdateEsalInput;
};


/** Login / Connection à l'application */
export type MutationupdateEvvaArgs = {
  updateEvvasInput: UpdateEvvasInput;
};


/** Login / Connection à l'application */
export type MutationupdateMremArgs = {
  inputUpdateMrem: InputUpdateMrem;
};


/** Login / Connection à l'application */
export type MutationupdatePasswordArgs = {
  newPassword: Scalars['String']['input'];
  previousPassword: Scalars['String']['input'];
};


/** Login / Connection à l'application */
export type MutationupdatePesstaArgs = {
  updatePesstaInput: UpdatePesstaInput;
};


/** Login / Connection à l'application */
export type MutationupdateTtraArgs = {
  updateTtraInput: UpdateTtraInput;
};


/** Login / Connection à l'application */
export type MutationupdateUtiArgs = {
  updateUtiParams: UpdateUtiParams;
};


/** Login / Connection à l'application */
export type MutationupdateVmeArgs = {
  additionnalVmeToCreate?: InputMaybe<InsertVmeInput>;
  files: Array<Scalars['Upload']['input']>;
  updateVmeInput: UpdateVmeInput;
};


/** Login / Connection à l'application */
export type MutationupsertAccessArgs = {
  upsertAccessParams: UpsertAccessParams;
};


/** Login / Connection à l'application */
export type MutationupsertAvatarArgs = {
  upsertAvatarInput: UpsertAvatarInput;
};


/** Login / Connection à l'application */
export type MutationupsertDelegationValidationMgrArgs = {
  upsertDelegationParams: UpsertDelegationParams;
};


/** Login / Connection à l'application */
export type MutationupsertEpacsArgs = {
  upsertEpacsInput: Array<UpsertEpacInput>;
};


/** Login / Connection à l'application */
export type MutationupsertEsdivArgs = {
  autoValidate?: InputMaybe<Scalars['Boolean']['input']>;
  esdivData: Scalars['JSON']['input'];
  esdivId?: InputMaybe<Scalars['Int']['input']>;
  esdivType: Scalars['Int']['input'];
  files: Array<Scalars['Upload']['input']>;
};


/** Login / Connection à l'application */
export type MutationupsertEsdrasArgs = {
  esdras: Array<InputEsdra>;
};


/** Login / Connection à l'application */
export type MutationupsertPtaArgs = {
  inputUpsertPta: InputUpsertPta;
};


/** Login / Connection à l'application */
export type MutationupsertUctsArgs = {
  upsertUctsInput: Array<UpsertUctInput>;
};


/** Login / Connection à l'application */
export type MutationupsertVlivsStatusArgs = {
  upsertVlivsInput: Array<UpsertVlivsInput>;
};


/** Login / Connection à l'application */
export type MutationvalidateLotsSaisiesArgs = {
  esaiIds: Array<Scalars['Int']['input']>;
};


/** Login / Connection à l'application */
export type MutationvalidateLotsSaisiesAetasArgs = {
  aetaTypes: Array<Scalars['Int']['input']>;
  lotIds: Array<Scalars['Int']['input']>;
};


/** Login / Connection à l'application */
export type MutationvalidateTimesheetArgs = {
  tshId: Scalars['Int']['input'];
};

/** Sélection de variables */
export type Mva = {
  __typename: 'Mva';
  id: Scalars['ID']['output'];
  /** Activer cette sélection dans l'Espace Employeur */
  mva_activer_saisie_espace_emp: Scalars['Boolean']['output'];
  /** Borner les dates de saisie à la période */
  mva_borner_dates_periode: Scalars['Boolean']['output'];
  /** Durée pause par défaut */
  mva_duree_pause_defaut: Maybe<Scalars['Int']['output']>;
  mva_id: Scalars['Int']['output'];
  /** Nom */
  mva_lib: Maybe<Scalars['String']['output']>;
  /** Saisir date fin valeur périodique */
  mva_saisir_date_fin: Scalars['Boolean']['output'];
  /** Saisir durée pause */
  mva_saisir_duree_pause: Scalars['Boolean']['output'];
  /** Saisir heure début et heure de fin */
  mva_saisir_heures: Scalars['Boolean']['output'];
  /** Saisir heure début et heure de fin pause */
  mva_saisir_heures_pause: Scalars['Boolean']['output'];
  /** Do not exist in Mva */
  mvars: Maybe<Array<Mvar>>;
  pad_id: Scalars['Int']['output'];
};

export type Mvar = {
  __typename: 'Mvar';
  id: Scalars['ID']['output'];
  mva_id: Scalars['Int']['output'];
  mvar_formule: Maybe<Scalars['String']['output']>;
  mvar_id: Scalars['Int']['output'];
  mvar_niveau: Maybe<Scalars['Int']['output']>;
  mvar_rank: Scalars['Int']['output'];
  mvar_type_saisie_dates: Scalars['Int']['output'];
  /** Do not exist in Mvar */
  var: Maybe<Var>;
  var_id: Scalars['Int']['output'];
};

export type Ncnt = {
  __typename: 'Ncnt';
  id: Scalars['ID']['output'];
  ncnt_code: Scalars['String']['output'];
  ncnt_creer_bul: Scalars['Boolean']['output'];
  ncnt_dads_code: Maybe<Scalars['String']['output']>;
  ncnt_dsn_code: Scalars['String']['output'];
  ncnt_id: Scalars['Int']['output'];
  ncnt_lib: Scalars['String']['output'];
  ncnt_lib_simplifie: Maybe<Scalars['String']['output']>;
  ncnt_ordre_tri: Scalars['Int']['output'];
};

export type Nivc = {
  __typename: 'Nivc';
  acrd_id: Scalars['Int']['output'];
  catc_id: Maybe<Scalars['Int']['output']>;
  fil_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** #Do not exists in Nivc */
  nivc_desc: Maybe<Scalars['String']['output']>;
  nivc_description: Maybe<Scalars['String']['output']>;
  nivc_id: Scalars['Int']['output'];
  nivc_lib: Maybe<Scalars['String']['output']>;
  nivc_val: Maybe<Scalars['String']['output']>;
  tacc_id: Maybe<Scalars['Int']['output']>;
};

export type NiveauDiplomeCappr = {
  __typename: 'NiveauDiplomeCappr';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lib: Scalars['String']['output'];
};

export type Nrg = {
  __typename: 'Nrg';
  dos_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  nrg_code: Maybe<Scalars['String']['output']>;
  nrg_id: Scalars['Int']['output'];
  nrg_lib: Maybe<Scalars['String']['output']>;
  nrg_niveausuperieur_id: Maybe<Scalars['Int']['output']>;
};

export type Ntif = {
  __typename: 'Ntif';
  /** #Do not exist in Ntif */
  createdHumanized: Maybe<Scalars['String']['output']>;
  esal_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  ntif_created_datetime: Scalars['DateTime']['output'];
  ntif_id: Scalars['Int']['output'];
  ntif_link_path: Maybe<Scalars['String']['output']>;
  ntif_origin: Scalars['String']['output'];
  ntif_origin_id: Scalars['Int']['output'];
  ntif_origin_type_notif: Scalars['Int']['output'];
  ntif_read: Scalars['Boolean']['output'];
  ntif_title: Scalars['String']['output'];
  origin_desc: Maybe<Scalars['String']['output']>;
  pad_id: Maybe<Scalars['Int']['output']>;
  sal_id: Maybe<Scalars['Int']['output']>;
  uti_id_target: Maybe<Scalars['Int']['output']>;
};

export type Org = {
  __typename: 'Org';
  bnq_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  org_code: Maybe<Scalars['String']['output']>;
  org_code_dpae: Maybe<Scalars['String']['output']>;
  org_codecpam: Scalars['String']['output'];
  org_codepostal: Maybe<Scalars['String']['output']>;
  org_cpltadresse: Maybe<Scalars['String']['output']>;
  org_das_codepoppourreference: Scalars['Boolean']['output'];
  org_das_pasdecodepop: Scalars['Boolean']['output'];
  org_decladucs: Maybe<Scalars['Boolean']['output']>;
  /** Do not exists in Rorg */
  org_desc: Maybe<Scalars['String']['output']>;
  org_email: Maybe<Scalars['String']['output']>;
  org_id: Scalars['Int']['output'];
  org_interloc: Maybe<Scalars['String']['output']>;
  org_libelle: Maybe<Scalars['String']['output']>;
  org_nomvoie: Maybe<Scalars['String']['output']>;
  org_notes: Maybe<Scalars['String']['output']>;
  org_num_nat_emetteur: Maybe<Scalars['String']['output']>;
  org_numtel: Maybe<Scalars['String']['output']>;
  org_rib_beneficiaire: Maybe<Scalars['String']['output']>;
  org_rib_cle: Maybe<Scalars['String']['output']>;
  org_rib_compte: Maybe<Scalars['String']['output']>;
  org_rib_etab: Maybe<Scalars['String']['output']>;
  org_rib_guichet: Maybe<Scalars['String']['output']>;
  org_rib_intitule_compte: Maybe<Scalars['String']['output']>;
  org_siret: Maybe<Scalars['String']['output']>;
  org_ville: Maybe<Scalars['String']['output']>;
  ror_id: Maybe<Scalars['Int']['output']>;
};

export type Pacp = {
  __typename: 'Pacp';
  acrd_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  pacp_acq_nb_jrs_ann: Maybe<Scalars['Float']['output']>;
  pacp_affich_cpt_n: Scalars['Boolean']['output'];
  pacp_affich_cpt_n1: Scalars['Boolean']['output'];
  pacp_affich_cpt_n2: Scalars['Boolean']['output'];
  pacp_date_relative_limite_prise: Maybe<Scalars['String']['output']>;
  /** #Do not exists in Pacp */
  pacp_desc: Maybe<Scalars['String']['output']>;
  pacp_id: Scalars['Int']['output'];
  pacp_report_n2_nb_jrs_limite: Maybe<Scalars['Int']['output']>;
  pacp_type_acquisition: Scalars['Int']['output'];
  pacp_type_affich_compteurs: Scalars['Int']['output'];
  pacp_type_auto: Scalars['Int']['output'];
  pacp_type_gestion: Scalars['Int']['output'];
  pacp_type_peri: Scalars['Int']['output'];
  pacp_type_periode_ref: Scalars['Int']['output'];
  pacp_type_prise: Scalars['Int']['output'];
  pacp_type_report_n2: Scalars['Int']['output'];
  peria_id: Maybe<Scalars['Int']['output']>;
  prcp_id: Maybe<Scalars['Int']['output']>;
};

/** Dossier de Paie */
export type Pad = {
  __typename: 'Pad';
  betaFeaturesEnabled: Array<BetaFeatureEnabled>;
  /** Compte bancaire par défaut */
  bnqd_id_defaut: Maybe<Scalars['Int']['output']>;
  dco_id: Maybe<Scalars['Int']['output']>;
  /** Derogations de validation des demandes en cours sur le dossier */
  derovs: Maybe<Array<Derov>>;
  /** Dossier général(dossier dos_id avec des sous - dossiers de paie pad_id) */
  dos_id: Scalars['Int']['output'];
  frj: Maybe<Frj>;
  /** Forme juridique */
  frj_id: Maybe<Scalars['Int']['output']>;
  /** Groupe de sociétés */
  gdp_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lots: Maybe<Array<Lot>>;
  /** Activer la gestion automatique des maintiens de salaire en cas d'arrêt médical */
  pad_activer_abs_med_auto: Scalars['Boolean']['output'];
  /** Active la gestion des demandes de salariés */
  pad_activer_espaces_sal_mgr: Scalars['Boolean']['output'];
  /** Afficher les notes complémentaires */
  pad_activer_notes_assistant_cnt: Maybe<Scalars['Boolean']['output']>;
  /**
   * Autoriser la saisie en masse de vva dans l'Espace Employeur
   * @deprecated Plus utilisé car fonctionnalité activée sur tous les dossiers
   */
  pad_activer_vva_masse_ee: Scalars['Boolean']['output'];
  /** Signataire pour les AED */
  pad_aed_rsp_id: Maybe<Scalars['Int']['output']>;
  /** Activer les fonctionnalités de gestion d'affaires */
  pad_affaires_activer: Scalars['Boolean']['output'];
  pad_ccn_defaut: Maybe<Scalars['Int']['output']>;
  pad_code: Scalars['String']['output'];
  /** Label correspondant au dossier dans Github */
  pad_crm_name: Maybe<Scalars['String']['output']>;
  /**
   * Test = 1
   * Réel = 2
   */
  pad_dpae_mode_envoi: Scalars['Int']['output'];
  /** Contact pour les DPAE */
  pad_dpae_rsp_id: Maybe<Scalars['Int']['output']>;
  /** Contact DSN chez le déclaré */
  pad_dsn_contact_rsp_id: Maybe<Scalars['Int']['output']>;
  /** Mois de déclaration des taxes assises sur salaires */
  pad_dsn_type_mois_decla_taxes_assises: Scalars['Int']['output'];
  /** Signataire pour les contrats */
  pad_edition_cnt_rsp_id: Maybe<Scalars['Int']['output']>;
  /** Délai de facturation par défaut */
  pad_ett_delai_facturation_defaut: Maybe<Scalars['Int']['output']>;
  /** Garant financier(mention figurant sur les bulletins) */
  pad_ett_garant: Maybe<Scalars['String']['output']>;
  /** Autoriser la saisie libre du positionnement dans la classification */
  pad_gerer_ect_classif_libre: Scalars['Boolean']['output'];
  /** Autoriser la saisie libre des libellés de l'emploi */
  pad_gerer_ect_lib_libre: Scalars['Boolean']['output'];
  /** Activer les fonctionnalités de gestion du travail temporaire */
  pad_gerer_interim: Scalars['Boolean']['output'];
  /** Activer les fonctionnalités de portage salarial */
  pad_gerer_portage: Scalars['Boolean']['output'];
  /** Activer les fonctionnalités de gestion des temps */
  pad_gta_activer: Scalars['Boolean']['output'];
  /** Autoriser saisies des présences sur les X jours précédents la période courante */
  pad_gta_nb_jour_saisie_precedent_period_courante: Scalars['Int']['output'];
  /** Périodicité de validation des déclarations de présence */
  pad_gta_period_approval: Scalars['Int']['output'];
  /** Périodicité de validation des déclarations de présence: Nb de semaines */
  pad_gta_period_approval_nb_weeks: Maybe<Scalars['Int']['output']>;
  /** Type de périodicité de soumissions des déclarations de présence */
  pad_gta_period_timesheet: Scalars['Int']['output'];
  /** Nb par période */
  pad_gta_period_timesheet_nb_of_unit: Scalars['Int']['output'];
  /** Type de périodicité de soumissions des déclarations de présence */
  pad_gta_period_timesheet_nb_weeks: Maybe<Scalars['Int']['output']>;
  /** ID  du Dossier de paie */
  pad_id: Scalars['Int']['output'];
  /** Bloquer les créations de contrats assistées quand le salarié ciblé possède un CDI dans le groupe */
  pad_interdire_cdd_et_cdi_dans_groupe: Scalars['Boolean']['output'];
  /** Interdire plusieurs contrats par jour pour le même salarié */
  pad_interdire_plusieurs_contrats_par_jour: Scalars['Boolean']['output'];
  /** Dossier de test ou de démonstration */
  pad_is_test: Scalars['Boolean']['output'];
  /** Libellé */
  pad_libelle: Scalars['String']['output'];
  /** Masquer affaire / événement */
  pad_masquer_affaire_evenement_assistant_cnt: Maybe<Scalars['Boolean']['output']>;
  /** Masquer l'affectation */
  pad_masquer_affectation_assistant_cnt: Maybe<Scalars['Boolean']['output']>;
  pad_mat_format: Scalars['Int']['output'];
  /** Longueur des matricules salariés */
  pad_mat_longueur: Scalars['Int']['output'];
  /** Générer automatiquement les matricules */
  pad_matricule_auto: Scalars['Boolean']['output'];
  /** Empêcher la modification du matricule par l'utilisateur */
  pad_matricule_readonly: Scalars['Boolean']['output'];
  /** Premier mois de l'année sociale */
  pad_mois_debut_annee_sociale: Scalars['Int']['output'];
  pad_net_clb_id: Maybe<Scalars['Int']['output']>;
  pad_net_rub_id: Maybe<Scalars['Int']['output']>;
  /** Notes */
  pad_notes: Maybe<Scalars['String']['output']>;
  /** Générer automatiquement les numéros de contrat */
  pad_numcontrat_auto: Scalars['Boolean']['output'];
  /** Empêcher la modification du n° de contrat par l'utilisateur */
  pad_numcontrat_readonly: Scalars['Boolean']['output'];
  /**
   * Unique par salarié = 1
   * Unique par dossier = 2
   */
  pad_numcontrat_type: Scalars['Int']['output'];
  /** Activer le module gestion de la paie */
  pad_pay_activer: Scalars['Boolean']['output'];
  /** Activer le calcul automatique des bulletins */
  pad_pay_activer_calcul_auto: Scalars['Boolean']['output'];
  /** Premier seuil d'alerte pour les fins de période d'essai(en jours) */
  pad_periodes_essai_seuil_alerte_1: Scalars['Int']['output'];
  /** Second seuil d'alerte pour les fins de période d'essai imminente(en jours) */
  pad_periodes_essai_seuil_alerte_2: Scalars['Int']['output'];
  pad_rappel: Maybe<Scalars['String']['output']>;
  /** Ville d'immatriculation au RCS */
  pad_rcs_ville_immat: Maybe<Scalars['String']['output']>;
  /** Obsolète */
  pad_repertoiredocs: Maybe<Scalars['String']['output']>;
  /** Coordonnées du SIE du pad */
  pad_sie_coordonnees: Maybe<Scalars['String']['output']>;
  /** Etablissement siège */
  pad_siege_eta_id: Maybe<Scalars['Int']['output']>;
  /** SIREN */
  pad_siren: Scalars['String']['output'];
  /** Activer les fonctionnalités de gestion des intermittents du spectacle */
  pad_spect_activer: Scalars['Boolean']['output'];
  /** Agrément */
  pad_spect_aem_agrement: Maybe<Scalars['String']['output']>;
  /** Prochain n° */
  pad_spect_aem_prochain_num: Maybe<Scalars['Int']['output']>;
  /** Prochain n° */
  pad_spect_cs_prochain_num: Maybe<Scalars['Int']['output']>;
  /** N° label */
  pad_spect_num_label_presta: Maybe<Scalars['String']['output']>;
  /** N° de licence */
  pad_spect_num_licence: Maybe<Scalars['String']['output']>;
  pad_spect_org_occas: Scalars['Boolean']['output'];
  /** Label prestataire */
  pad_spect_titulaire_label_presta: Scalars['Boolean']['output'];
  /** Licence de spectacle */
  pad_spect_titulaire_licence: Scalars['Boolean']['output'];
  /**
   * Validé = 1
   * Brouillon = 2
   */
  pad_statut: Scalars['Int']['output'];
  /** Afficher le logo dans l'entête de l'application */
  pad_theme_afficher_logo: Scalars['Boolean']['output'];
  /** Afficher logo sur le bulletin */
  pad_theme_bul_afficher_logo: Scalars['Boolean']['output'];
  /** Couleur du thème 1 */
  pad_theme_color1: Scalars['String']['output'];
  /** Couleur du thème 2 */
  pad_theme_color2: Scalars['String']['output'];
  /** Couleur du thème 3 */
  pad_theme_color3: Scalars['String']['output'];
  /** Nom du fichier contenant le logo du pad */
  pad_theme_logo_filename: Maybe<Scalars['String']['output']>;
  /** Numéro de TVA du pad */
  pad_tva_num: Maybe<Scalars['String']['output']>;
  /** Signataire */
  pay_spect_aem_signataire_rsp_id: Maybe<Scalars['Int']['output']>;
  /** #Do not exists in pad */
  pdos: Maybe<Pdos>;
  /** Périmètre */
  pdos_id: Scalars['Int']['output'];
  ppabs: Maybe<Ppabs>;
  psec: Maybe<Psec>;
  psign: Maybe<Psign>;
};

export type PadCRM = {
  __typename: 'PadCRM';
  /** Agents utilisateurs du dossier */
  agents: Array<Agt>;
  /** Contrat en vigueur du dossier */
  cnt: Maybe<Crm_Cnt>;
  /** dossier actifs possédants le dossier */
  portefeuilles: Array<PadOfPortefeuille>;
};

export type PadDesc = {
  __typename: 'PadDesc';
  pad_code: Scalars['String']['output'];
  pad_libelle: Scalars['String']['output'];
};

export type PadOfPortefeuille = {
  __typename: 'PadOfPortefeuille';
  pad_id: Scalars['Int']['output'];
};

export type Pare = {
  __typename: 'Pare';
  acrd_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** #Do not exists in Pacp */
  pare_desc: Maybe<Scalars['String']['output']>;
  pare_fj_affich_nbj_trav: Scalars['Boolean']['output'];
  pare_fj_affich_rub_inform: Scalars['Boolean']['output'];
  pare_fj_cpt_acquis_type: Scalars['Int']['output'];
  pare_fj_cpt_pris_type: Scalars['Int']['output'];
  pare_fj_cpt_restant_type: Scalars['Int']['output'];
  pare_fj_methode_prorata: Scalars['Int']['output'];
  pare_fj_prorata_neutr_cp: Scalars['Boolean']['output'];
  pare_fj_rub_inform_template: Maybe<Scalars['String']['output']>;
  pare_fj_type_affich_cpt_n: Scalars['Int']['output'];
  pare_fj_type_affich_cpt_nm1: Scalars['Int']['output'];
  pare_fj_type_debut_periode: Scalars['Int']['output'];
  pare_id: Scalars['Int']['output'];
  pare_lissage_cml_id: Maybe<Scalars['Int']['output']>;
  pare_lissage_nb_mois: Maybe<Scalars['Int']['output']>;
  pare_quot_coll_ref: Maybe<Scalars['Float']['output']>;
  pare_quot_journ_coll_ref: Maybe<Scalars['Float']['output']>;
  pare_quot_periode: Scalars['Int']['output'];
  pare_smc_pct_avec_variable: Maybe<Scalars['Int']['output']>;
  pare_smc_pct_fixe: Maybe<Scalars['Int']['output']>;
  pare_type_auto: Scalars['Int']['output'];
  pare_type_calcul_abs_es: Scalars['Int']['output'];
  pare_type_lissage: Scalars['Int']['output'];
  pare_type_peri: Scalars['Int']['output'];
  peria_id: Maybe<Scalars['Int']['output']>;
  prem_id: Maybe<Scalars['Int']['output']>;
  trem_id: Scalars['Int']['output'];
};

export type Pcpa = {
  __typename: 'Pcpa';
  acrd_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  pcpa_acq_nb_jrs_periode: Maybe<Scalars['Float']['output']>;
  pcpa_affich_cpt_n: Scalars['Boolean']['output'];
  pcpa_affich_cpt_n1: Scalars['Boolean']['output'];
  pcpa_affich_cpt_n2: Scalars['Boolean']['output'];
  pcpa_debut_acquisition_num_mois: Maybe<Scalars['Int']['output']>;
  /** #Do not exists in Pcpa */
  pcpa_desc: Maybe<Scalars['String']['output']>;
  pcpa_id: Scalars['Int']['output'];
  pcpa_mode_attribution: Scalars['Int']['output'];
  pcpa_type_acquis: Scalars['Int']['output'];
  pcpa_type_affich_cpt: Scalars['Int']['output'];
  pcpa_type_auto: Scalars['Int']['output'];
  pcpa_type_debut_attribution: Maybe<Scalars['Int']['output']>;
  pcpa_type_gestion: Scalars['Int']['output'];
  pcpa_type_peria: Scalars['Int']['output'];
  pcpa_type_periode_minoration_abs: Scalars['Int']['output'];
  pcpa_type_periode_ref: Scalars['Int']['output'];
  pcpa_type_prise: Scalars['Int']['output'];
  peria_id: Maybe<Scalars['Int']['output']>;
};

export type Pdos = {
  __typename: 'Pdos';
  id: Scalars['ID']['output'];
  pdos_adresse_email_envois: Scalars['String']['output'];
  pdos_can_activate_gestion_affaires: Scalars['Boolean']['output'];
  pdos_can_activate_interim: Scalars['Boolean']['output'];
  pdos_can_activate_portage: Scalars['Boolean']['output'];
  pdos_can_activate_spectacle: Scalars['Boolean']['output'];
  pdos_domain_name: Scalars['String']['output'];
  pdos_ee_afficher_infos_agents: Scalars['Boolean']['output'];
  pdos_id: Scalars['Int']['output'];
  pdos_lib_interne: Scalars['String']['output'];
  pdos_nom_logo_main: Scalars['String']['output'];
  pdos_nom_main: Scalars['String']['output'];
  pdos_timeout_default: Scalars['Int']['output'];
};

export type Penc = {
  __typename: 'Penc';
  cnt_id: Maybe<Scalars['Int']['output']>;
  fpeb_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  penc_datedebut: Scalars['Date']['output'];
  penc_datefin: Maybe<Scalars['Date']['output']>;
  penc_id: Scalars['Int']['output'];
};

export type PeriodeMaintien = {
  __typename: 'PeriodeMaintien';
  cmsalId: Scalars['Int']['output'];
  dateDebut: Scalars['Date']['output'];
  dateFin: Scalars['Date']['output'];
  nbj: Scalars['Int']['output'];
  taux: Scalars['Int']['output'];
};

export type Pessta = {
  __typename: 'Pessta';
  /** Do not exists in Prev */
  cnt: Maybe<Cnt>;
  cnt_id: Maybe<Scalars['Int']['output']>;
  ecnt: Maybe<Ecnt>;
  ecnt_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** Date de confirmation de fin de période d'essai */
  pessta_date_fin_essai_confirmation: Maybe<Scalars['Date']['output']>;
  /** Date de confirmation de fin de période d'essai renouvelé */
  pessta_date_fin_essai_renouv_confirmation: Maybe<Scalars['Date']['output']>;
  pessta_id: Scalars['Int']['output'];
  /** Période d'essai renouvelée */
  pessta_renouv: Scalars['Boolean']['output'];
  /** Période d'essai validée */
  pessta_valide: Maybe<Scalars['Boolean']['output']>;
};

export type PlanningAbsence = {
  __typename: 'PlanningAbsence';
  Draggable: Scalars['Boolean']['output'];
  Resizable: Scalars['Boolean']['output'];
  debutAprem: Scalars['Boolean']['output'];
  endDate: Scalars['String']['output'];
  esai_id: Maybe<Scalars['Int']['output']>;
  finMatin: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  resourceId: Scalars['Int']['output'];
  salDesc: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
  state: AbsenceState;
  statutDemande: Scalars['String']['output'];
  tab_code: Maybe<Scalars['String']['output']>;
  wdm_type_derogation: Scalars['Boolean']['output'];
  wfrs_id: Scalars['Int']['output'];
};

export type PlanningEmployeurConfig = {
  __typename: 'PlanningEmployeurConfig';
  absences: Array<PlanningAbsence>;
  employees: Array<PlanningEmployeurEmployee>;
  workDays: Array<PlanningWorkDay>;
};

export type PlanningEmployeurEmployee = {
  __typename: 'PlanningEmployeurEmployee';
  id: Scalars['ID']['output'];
  salDesc: Scalars['String']['output'];
};

export type PlanningManagerEmployee = {
  __typename: 'PlanningManagerEmployee';
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  mgr_desc: Maybe<Scalars['String']['output']>;
  /** Si level = 0 alors on parle d'un manager (ce qui fait que beaucoup d'autre propriétés sont null) */
  niveau: Maybe<Scalars['String']['output']>;
  originalMgrDesc: Maybe<Scalars['String']['output']>;
  originalMgrSalId: Maybe<Scalars['Int']['output']>;
  salAndMgr_desc: Maybe<Scalars['String']['output']>;
  salDesc: Scalars['String']['output'];
  uorg_id: Maybe<Scalars['Int']['output']>;
  uorg_lib: Maybe<Scalars['String']['output']>;
};

export type PlanningMgrConfig = {
  __typename: 'PlanningMgrConfig';
  absences: Array<PlanningAbsence>;
  employees: Array<PlanningManagerEmployee>;
  workDays: Array<PlanningWorkDay>;
};

export type PlanningSalConfig = {
  __typename: 'PlanningSalConfig';
  absences: Array<PlanningAbsence>;
  employees: Array<PlanningSalEmployee>;
  workDays: Array<PlanningWorkDay>;
};

export type PlanningSalEmployee = {
  __typename: 'PlanningSalEmployee';
  id: Scalars['ID']['output'];
  salDesc: Scalars['String']['output'];
};

export type PlanningWorkDay = {
  __typename: 'PlanningWorkDay';
  Draggable: Scalars['Boolean']['output'];
  Resizable: Scalars['Boolean']['output'];
  date: Scalars['Date']['output'];
  debutAprem: Scalars['Boolean']['output'];
  finMatin: Scalars['Boolean']['output'];
  heureArrivee: Maybe<Scalars['LocalDateTime']['output']>;
  heureDepart: Maybe<Scalars['LocalDateTime']['output']>;
  id: Scalars['ID']['output'];
  /** Horaire de début de travail l'après-midi (ex: 14:00). Donnée brut ayant donné le resultat HeureArrivee/HeureDepart/tempsPauseMinute */
  jph_heure_aprem_debut: Maybe<Scalars['String']['output']>;
  /** Horaire de fin de travail l'après-midi (ex: 18:00). Donnée brut ayant donné le resultat HeureArrivee/HeureDepart/tempsPauseMinute */
  jph_heure_aprem_fin: Maybe<Scalars['String']['output']>;
  /** Horaire de début de travail le matin (ex: 08:00). Donnée brut ayant donné le resultat HeureArrivee/HeureDepart/tempsPauseMinute */
  jph_heure_matin_debut: Maybe<Scalars['String']['output']>;
  /** Horaire de fin de travail le matin (ex: 12:00). Donnée brut ayant donné le resultat HeureArrivee/HeureDepart/tempsPauseMinute */
  jph_heure_matin_fin: Maybe<Scalars['String']['output']>;
  nbHeuresAprem: Maybe<Scalars['Float']['output']>;
  nbHeuresMatin: Maybe<Scalars['Float']['output']>;
  resourceId: Scalars['Int']['output'];
  salDesc: Scalars['String']['output'];
  tempsPauseMinute: Maybe<Scalars['Int']['output']>;
};

/** Planning hebdomadaire */
export type Plh = {
  __typename: 'Plh';
  id: Scalars['ID']['output'];
  jphs: Maybe<Array<Jph>>;
  pad_id: Scalars['Int']['output'];
  plh_id: Scalars['Int']['output'];
  plh_lib: Scalars['String']['output'];
  plh_num_premier_jr: Scalars['Int']['output'];
  /**
   * #Do not exists in Plh
   *     numero de semaine(correspond au numero dans ppla_plh_sem1, ppla_plh_sem2...)
   */
  semaine: Maybe<Scalars['Int']['output']>;
};

export type PointageDay = {
  __typename: 'PointageDay';
  date: Scalars['Date']['output'];
  dateDesc: Scalars['String']['output'];
  dayAbsencesInfos: DayAbsencesInfos;
  id: Scalars['ID']['output'];
  periodTsh: Maybe<Tsh>;
  periodVts: Maybe<Vts>;
  pta: Maybe<Pta>;
  ptaDesc: Scalars['String']['output'];
};

export type Posc = {
  __typename: 'Posc';
  acrd_id: Scalars['Int']['output'];
  catc_id: Maybe<Scalars['Int']['output']>;
  emp_id: Maybe<Scalars['Int']['output']>;
  fil_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  nivc_id: Maybe<Scalars['Int']['output']>;
  /** #Do not exists in Posc */
  posc_desc: Maybe<Scalars['String']['output']>;
  posc_description: Maybe<Scalars['String']['output']>;
  posc_id: Scalars['Int']['output'];
  posc_lib: Maybe<Scalars['String']['output']>;
  posc_numero: Maybe<Scalars['String']['output']>;
  tacc_id: Maybe<Scalars['Int']['output']>;
};

export type Ppa = {
  __typename: 'Ppa';
  id: Scalars['ID']['output'];
  lot_id: Scalars['Int']['output'];
  peri_anneemois: Scalars['Int']['output'];
  ppa_abs_datedebut: Maybe<Scalars['Date']['output']>;
  ppa_abs_datefin: Maybe<Scalars['Date']['output']>;
  ppa_datedebut: Scalars['Date']['output'];
  ppa_datefin: Scalars['Date']['output'];
  ppa_datereglement: Scalars['Date']['output'];
  ppa_id: Scalars['Int']['output'];
  ppa_libelle: Scalars['String']['output'];
  ppa_numero_ordre: Scalars['Int']['output'];
};

export type Ppabs = {
  __typename: 'Ppabs';
  gdp_id: Maybe<Scalars['Int']['output']>;
  pad_id: Maybe<Scalars['Int']['output']>;
  ppabs_enabled: Scalars['Boolean']['output'];
  ppabs_id: Scalars['Int']['output'];
  ppabs_provider_type: Scalars['Int']['output'];
};

/** Profil de planning */
export type Ppla = {
  __typename: 'Ppla';
  acrd_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  peria_id: Maybe<Scalars['Int']['output']>;
  plhs: Maybe<Array<Plh>>;
  ppla_comment_periode: Scalars['Boolean']['output'];
  ppla_comment_presence_jour: Scalars['Boolean']['output'];
  /** #Do not exists in Ppla */
  ppla_desc: Maybe<Scalars['String']['output']>;
  ppla_id: Scalars['Int']['output'];
  ppla_nb_semaines: Scalars['Int']['output'];
  ppla_plh_sem1: Scalars['Int']['output'];
  ppla_plh_sem2: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem3: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem4: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem5: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem6: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem7: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem8: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem9: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem10: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem11: Maybe<Scalars['Int']['output']>;
  ppla_plh_sem12: Maybe<Scalars['Int']['output']>;
  ppla_preremplir_horaires: Scalars['Boolean']['output'];
  ppla_saisie_fraction_jour: Scalars['Int']['output'];
  ppla_saisie_jour_uniquement: Scalars['Boolean']['output'];
  ppla_timesheet_mention: Maybe<Scalars['String']['output']>;
  ppla_type_auto: Scalars['Int']['output'];
  ppla_type_peria: Scalars['Int']['output'];
  ppla_type_saisie_presence: Scalars['Int']['output'];
};

export type Pres = {
  __typename: 'Pres';
  id: Scalars['ID']['output'];
  lvva_id: Maybe<Scalars['Int']['output']>;
  pres_id: Scalars['Int']['output'];
  pres_message_pour_emp: Maybe<Scalars['String']['output']>;
  pres_modifiable: Scalars['Boolean']['output'];
  pres_supprimable: Scalars['Boolean']['output'];
};

export type PresencePeriod = {
  __typename: 'PresencePeriod';
  dateDebut: Scalars['Date']['output'];
  dateFin: Scalars['Date']['output'];
  descPeriode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  periodTsh: Maybe<Tsh>;
  periodVts: Maybe<Vts>;
  pointages: Array<Pta>;
};

export type Prev = {
  __typename: 'Prev';
  afod_id: Maybe<Scalars['Int']['output']>;
  eta_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  pad_id: Scalars['Int']['output'];
  prev_datedebut: Scalars['Date']['output'];
  prev_datefin: Maybe<Scalars['Date']['output']>;
  prev_declarer_dsn: Scalars['Boolean']['output'];
  prev_delegataire_org_id: Maybe<Scalars['Int']['output']>;
  prev_desc_garanties: Maybe<Scalars['String']['output']>;
  prev_dsn_gen_data_indiv_if_zero: Scalars['Boolean']['output'];
  prev_frais_sante_type_tarif: Maybe<Scalars['Int']['output']>;
  prev_id: Scalars['Int']['output'];
  prev_lib: Scalars['String']['output'];
  prev_part_pat_globale: Maybe<Scalars['Float']['output']>;
  prev_ref: Scalars['String']['output'];
  prev_type_acte: Maybe<Scalars['Int']['output']>;
  prev_type_adh_ayant_droits: Scalars['Int']['output'];
  prev_type_repart: Scalars['Int']['output'];
  prev_type_risque: Scalars['Int']['output'];
  tcprev_id: Maybe<Scalars['Int']['output']>;
  /** Do not exists in Prev */
  tprev_lib: Maybe<Scalars['String']['output']>;
};

export type Prf = {
  __typename: 'Prf';
  id: Scalars['ID']['output'];
  pdos_id: Scalars['Int']['output'];
  prf_id: Scalars['Int']['output'];
  prf_lib: Scalars['String']['output'];
};

/** Profil portail gestion des demandes d'absences */
export type Prga = {
  __typename: 'Prga';
  cgas: Maybe<Array<Cga>>;
  cnt_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** Do not exist in Prga */
  origin: Maybe<Scalars['Int']['output']>;
  /** Dossier de paie */
  pad_id: Maybe<Scalars['Int']['output']>;
  /** Périmètre d'application  */
  peria_id: Maybe<Scalars['Int']['output']>;
  /** L'utilisateur peut visualiser le planning de son service */
  prga_affich_planning_service: Scalars['Boolean']['output'];
  /** L'utilisateur peut voir les absences de son manager dans le planning */
  prga_affich_planning_service_inclure_mgr: Scalars['Boolean']['output'];
  prga_id: Scalars['Int']['output'];
  /**
   * Automatique et personnalisé = 1
   * Automatique uniquement = 2
   * Personnalisé uniquement = 3
   */
  prga_type_auto: Scalars['Int']['output'];
  /**
   * Appliquer pour tout le dossier = 1
   * Appliquer un périmètre spécifique = 2
   */
  prga_type_peria: Scalars['Int']['output'];
  tgas: Maybe<Array<Tga>>;
};

export type Prgp = {
  __typename: 'Prgp';
  id: Scalars['ID']['output'];
  pad_id: Scalars['Int']['output'];
  peria_id: Maybe<Scalars['Int']['output']>;
  prgp_comment_periode: Scalars['Boolean']['output'];
  prgp_comment_presence_jour: Scalars['Boolean']['output'];
  prgp_display_working_place: Scalars['Boolean']['output'];
  prgp_id: Scalars['Int']['output'];
  prgp_preremplir_horaires: Scalars['Boolean']['output'];
  prgp_saisie_fraction_jour: Scalars['Int']['output'];
  prgp_saisie_jour_uniquement: Scalars['Boolean']['output'];
  prgp_timesheet_mention: Maybe<Scalars['String']['output']>;
  prgp_type_auto: Scalars['Int']['output'];
  prgp_type_peria: Scalars['Int']['output'];
  prgp_type_saisie_presence: Scalars['Int']['output'];
  prpg_saisie_fraction_jour: Scalars['Int']['output'];
  prpg_type_saisie_presence: Scalars['Int']['output'];
};

export type Prtt = {
  __typename: 'Prtt';
  acrd_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  peria_id: Maybe<Scalars['Int']['output']>;
  prtt_acq_nb_jrs_periode: Maybe<Scalars['Float']['output']>;
  prtt_acq_nb_patronaux_periode: Maybe<Scalars['Float']['output']>;
  prtt_acquis_nb_semaines: Maybe<Scalars['Int']['output']>;
  /** #Do not exists in Prtt */
  prtt_desc: Maybe<Scalars['String']['output']>;
  prtt_id: Scalars['Int']['output'];
  prtt_type_acquis: Scalars['Int']['output'];
  prtt_type_affich_cpt: Scalars['Int']['output'];
  prtt_type_auto: Scalars['Int']['output'];
  prtt_type_calcul_acquis: Scalars['Int']['output'];
  prtt_type_gestion_acquis: Scalars['Int']['output'];
  prtt_type_peria: Scalars['Int']['output'];
  prtt_type_periode_acquis: Scalars['Int']['output'];
  prtt_type_periode_minoration_abs: Scalars['Int']['output'];
  prtt_unite: Scalars['Int']['output'];
};

export type Prui = {
  __typename: 'Prui';
  id: Scalars['ID']['output'];
  /** #Do not exists in Prui */
  moduleSettings: Maybe<Array<ModuleSettings>>;
  pad_id: Maybe<Scalars['Int']['output']>;
  peria_id: Maybe<Scalars['Int']['output']>;
  prui_id: Scalars['Int']['output'];
  prui_mgr_acces_fiche_collab: Scalars['Boolean']['output'];
  prui_type_auto: Scalars['Int']['output'];
  prui_type_peria: Scalars['Int']['output'];
  prui_type_ui: Scalars['Int']['output'];
};

export type Psec = {
  __typename: 'Psec';
  id: Scalars['ID']['output'];
  pad_id: Maybe<Scalars['Int']['output']>;
  pdos_id: Maybe<Scalars['Int']['output']>;
  psec_bnqs_saisie_titu_different_interdite: Scalars['Boolean']['output'];
  psec_id: Scalars['Int']['output'];
  psec_max_inactive_disconnect_mn: Maybe<Scalars['Int']['output']>;
  psec_max_login_attempts: Scalars['Int']['output'];
  psec_password_outdate_days_interval: Maybe<Scalars['Int']['output']>;
  psec_password_outdate_enabled: Scalars['Boolean']['output'];
  psec_pwd_interval_between_reuse: Maybe<Scalars['Int']['output']>;
  psec_pwd_reuse_limiter_enabled: Scalars['Boolean']['output'];
};

export type Psign = {
  __typename: 'Psign';
  pad_id: Scalars['Int']['output'];
  psign_enabled: Maybe<Scalars['Boolean']['output']>;
  psign_id: Scalars['Int']['output'];
  psign_type_provider: Scalars['Int']['output'];
};

export type Pta = {
  __typename: 'Pta';
  cnt_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  pta_comment: Maybe<Scalars['String']['output']>;
  pta_date: Scalars['Date']['output'];
  pta_heure_arrivee: Maybe<Scalars['String']['output']>;
  pta_heure_depart: Maybe<Scalars['String']['output']>;
  pta_id: Scalars['Int']['output'];
  pta_pause1_debut: Maybe<Scalars['String']['output']>;
  pta_pause1_fin: Maybe<Scalars['String']['output']>;
  pta_pause2_debut: Maybe<Scalars['String']['output']>;
  pta_pause2_fin: Maybe<Scalars['String']['output']>;
  pta_pause3_debut: Maybe<Scalars['String']['output']>;
  pta_pause3_fin: Maybe<Scalars['String']['output']>;
  pta_presence_aprem: Maybe<Scalars['Boolean']['output']>;
  pta_presence_journee: Maybe<Scalars['Boolean']['output']>;
  pta_presence_matin: Maybe<Scalars['Boolean']['output']>;
  pta_working_place: Maybe<Scalars['Int']['output']>;
  pta_working_place_comment: Maybe<Scalars['String']['output']>;
};

export type Ptab = {
  __typename: 'Ptab';
  acrd_id: Scalars['Int']['output'];
  /** Do not exist in Ptab */
  acrd_niveau: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  ptab_espace_emp_explications: Maybe<Scalars['String']['output']>;
  ptab_forcer_nb: Scalars['Boolean']['output'];
  ptab_id: Scalars['Int']['output'];
  /** @deprecated Utiliser tab_lib */
  ptab_lib_interne: Maybe<Scalars['String']['output']>;
  ptab_methode_retenue: Scalars['Int']['output'];
  ptab_methode_retenue_specif_heures: Maybe<Scalars['Int']['output']>;
  ptab_msal_type: Scalars['Int']['output'];
  ptab_reuse_rub_indem: Scalars['Boolean']['output'];
  ptab_unite_autor: Scalars['Int']['output'];
  rub_id_indem: Maybe<Scalars['Int']['output']>;
  rub_id_indem_2: Maybe<Scalars['Int']['output']>;
  rub_id_indem_3: Maybe<Scalars['Int']['output']>;
  rub_id_retenue: Maybe<Scalars['Int']['output']>;
  tab: Maybe<Tab>;
  tab_id: Scalars['Int']['output'];
};

export type Pts = {
  __typename: 'Pts';
  id: Scalars['ID']['output'];
  pta_id: Scalars['Int']['output'];
  pts_id: Scalars['Int']['output'];
  tsh_id: Scalars['Int']['output'];
};

/** Pays */
export type Pys = {
  __typename: 'Pys';
  id: Scalars['ID']['output'];
  /** Code pays CIO */
  pys_code_cio: Scalars['String']['output'];
  /** Code domaine Internet */
  pys_code_iana_internet: Scalars['String']['output'];
  /** Code ISO alpha 2 */
  pys_code_iso_3166_1_alpha2: Scalars['String']['output'];
  /** Code ISO alpha 3 */
  pys_code_iso_3166_1_alpha3: Scalars['String']['output'];
  /** Code ISO numérique */
  pys_code_iso_numerique: Maybe<Scalars['String']['output']>;
  /** Code pays télécom */
  pys_code_itu: Scalars['String']['output'];
  /** Code plaque minéralogique */
  pys_code_mineralogique: Scalars['String']['output'];
  /** Utilisé en DSN */
  pys_dsn_naissance: Scalars['Boolean']['output'];
  /** Id */
  pys_id: Scalars['Int']['output'];
  /** Ancien libellé */
  pys_insee_ancienlibelle: Maybe<Scalars['String']['output']>;
  /** Année d'indépendance */
  pys_insee_anneeindependance: Maybe<Scalars['Int']['output']>;
  /** Code INSEE */
  pys_insee_code: Scalars['String']['output'];
  /** Code actualité */
  pys_insee_codeactualite: Scalars['Int']['output'];
  /** Libellé court */
  pys_libelle_court: Scalars['String']['output'];
  /** Libellé long */
  pys_libelle_long: Scalars['String']['output'];
  /**
   * Nationalité correspondant à ce pays
   * IT SHOULD BE NOT NULL BUT IN THE DATABASE WE DON'T HAVE NOT NULL VALUES (EVEN IF THE COLUMN HAS NOT NULL CONSTRAINT)
   */
  pys_nationalite: Maybe<Scalars['String']['output']>;
  /** Nécessite un titre de travail */
  pys_titre_trav: Scalars['Boolean']['output'];
};

export type Query = {
  __typename: 'Query';
  InfosAbsencesMgr: InfosAbsencesMgr;
  absencesBasculeesEmployeur: Array<Abs>;
  absencesPortailExterne: Array<AbsencePortailExterne>;
  accords: Array<Acrd>;
  actusRh: Array<Crh>;
  affectationsOfCnt: Array<Uct>;
  affiliationsDossier: Array<Afod>;
  alertesCurrentUser: Array<Ale>;
  alertesFinsContrats: AlertesFinsContrats;
  altMinSalaire: AltMinSalaireOutput;
  arrets: Array<Art>;
  arretsEmployeur: Array<Eart>;
  banquesDossier: Array<Bnqd>;
  casDispenses: Array<Cdpre>;
  categoriesConv: Array<Catc>;
  categoriesTabAbs: Array<CategorieTabAbs>;
  centresMedicaux: Array<Org>;
  checkLoginCredentials: Scalars['Boolean']['output'];
  compteursAllEmployees: Array<CompteursEmployee>;
  compteursEmployee: CompteursEmployee;
  compteursStaff: Array<CompteursEmployee>;
  currentPeriodPointageDays: Array<PointageDay>;
  currentPeriodesEssaiForMgr: CurrentPeriodesEssaiForMgr;
  currentTitreTransportByEsalId: Maybe<Evva>;
  currentTitreTransportBySalId: Maybe<Vva>;
  demandesAdmEnCours: Array<DemandeAdmInfo>;
  dernierNet: DernierNet;
  documentsByDocLinkId: Array<Doc>;
  /** L'argument excludeBulletins est deprecated, le comportement sera de toujours exclure les bulletins qui ont un livrable de paie associé */
  documentsSalarie: Array<SalDocument>;
  droitsMaintienSalaire: DroitMaintien;
  echelons: Array<Echelon>;
  ecnts: Array<Ecnt>;
  emplois: Array<Emp>;
  esaiPeri: Array<Esai>;
  esals: Array<Esal>;
  /** esdraStatus : si renseignés, retourne uniquement des esdras qui ont les status renseignés en paramètre */
  esdras: Array<Esdra>;
  etablissements: Array<Eta>;
  etapesPaie: Array<Etap>;
  filieres: Array<Fil>;
  getContrats: Array<Cnt>;
  getCotisationsFraisDeSante: Array<Cprev>;
  getCotisationsFraisSanteApplicables: Array<Cprev>;
  getCurrentContrat: Maybe<Cnt>;
  getDefaultEmplois: Array<DefaultEmploi>;
  getEdeps: Array<Edep>;
  getEvvas: Array<Evva>;
  getEvvasFromPreviousMonth: Array<Evva>;
  getFacteursPenibilites: Array<Fpeb>;
  getLivrables: Array<Liv>;
  getLivrablesExplanations: Array<LivExplanation>;
  getLivrablesSalarie: Array<Liv>;
  getManager: Array<Manager>;
  getPenc: Array<Penc>;
  getPesstaFromContrat: Maybe<Pessta>;
  getRecommandedPeriodeEssai: RecommandedPeriodEssai;
  getRecommandedPeriodeEssaiByCntId: RecommandedPeriodEssai;
  getSituationSalarie: SituationSalarialeSal;
  getSituationSalarieByEsalId: SituationSalarialeEsal;
  getSituationSalarieBySalId: SituationSalarialeSal;
  getStatutHands: Array<StatutTravHand>;
  getVariablesEmployeur: Maybe<VariablesEmployeur>;
  getVisiteMedicaleById: Maybe<Vme>;
  getVisitesMedicales: Array<Vme>;
  getVvas: Array<Vva>;
  getVvasContratActives: Array<Vva>;
  getWfps: Array<Wfp>;
  histoActions: Maybe<Array<Maybe<HistoAction>>>;
  infosAbsencesSal: Array<InfosCollaborateurAbsence>;
  infosAffaire: Array<Aff>;
  infosAffectation: Array<Uorg>;
  infosCnt: Maybe<Infos>;
  infosDemande: Wdm;
  infosDemandesAbsencesSal: InfosDemandesAbsencesSal;
  infosForValidationAbsence: Array<InfosForValidationAbsence>;
  infosListeAbsencesMgr: Array<DemandeAbsMgrListe>;
  infosListeDemandesAdmMgr: Array<Wdm>;
  infosListeDemandesAdmSal: Array<Wdm>;
  infosPaiements: Array<InfoPaiement>;
  infosSepa: InfosSepa;
  joursFeriesLegaux: Array<ResultJf>;
  lastBulFromCnt: Maybe<Bul>;
  lastRem: LastRem;
  listEsal: Array<Esal>;
  listSal: Array<Sal>;
  listSalsTitresTravail: Array<Ttra>;
  listeCollaborateurs: Array<Collaborateur>;
  listeCommunes: Array<Cmu>;
  listePays: Array<Pys>;
  lots: Array<Lot>;
  minStageGratification: Maybe<Scalars['Float']['output']>;
  modesPaiement: Array<Mdp>;
  motifDepart: Mtf;
  motifsArrets: Array<Mart>;
  /** @deprecated Utiliser motifsDepartsCompatibles */
  motifsDepart: Array<Mtf>;
  motifsDepartsCompatibles: Array<MtfCfg>;
  motifsNonVersIndemniteDepart: Array<Mnvi>;
  motifsQuotSpec: Array<Mqts>;
  motifsRecoursCdd: Array<Rcdd>;
  msalsApplicables: Array<Msal>;
  myAccount: Array<DossierClient>;
  naturesContrat: Array<Ncnt>;
  niveauDiplomesCappr: Array<NiveauDiplomeCappr>;
  niveauxConv: Array<Nivc>;
  notifications: Array<Ntif>;
  openedRequests: Array<ZendeskRequest>;
  periodsToSubmit: Array<PresencePeriod>;
  planningEmployeur: PlanningEmployeurConfig;
  planningManager: PlanningMgrConfig;
  planningSal: PlanningSalConfig;
  positionsConv: Array<Posc>;
  profilPlanning: Maybe<Ppla>;
  profilRemFromCnt: Maybe<Pare>;
  ptabsDossier: Array<Ptab>;
  reglementaireCcnDossier: Ccn;
  /** Ce resolver est très similaire à listSal(), à la différence que celui ci permet de récupérer plus d'infos tel que l'entièreté des contrats du salarié ciblé au lieu de son dernier contrat uniquement. */
  salarieData: Sal;
  salaries: Array<Sal>;
  smicMensuel: Scalars['Float']['output'];
  statutHandicapOfSalarie: Array<StatutTravHandSal>;
  statutsRc: Array<Src>;
  timesheetsCollaborateurs: Array<Tsh>;
  typesContratAide: Array<Dpub>;
  typesOrga: Array<Tor>;
  typesRem: Array<Trem>;
  typesTitreTravail: Array<Tytr>;
  typesVme: Array<Tvme>;
  utiInfos: Maybe<Uti>;
  validateBicAndIban: ValidateBicAndIbanResult;
  vcals: Array<Vcal>;
  viewer: User;
};


export type QueryabsencesPortailExterneArgs = {
  input?: InputMaybe<InputGetAbsencesPortailExterne>;
};


export type QueryaffectationsOfCntArgs = {
  cntId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryalertesFinsContratsArgs = {
  depthLevel?: InputMaybe<Scalars['Int']['input']>;
  nbOfDays?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryaltMinSalaireArgs = {
  altMinSalaireInput: AltMinSalaireInput;
};


export type QueryarretsArgs = {
  salId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryarretsEmployeurArgs = {
  esalId?: InputMaybe<Scalars['Int']['input']>;
  salId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycategoriesConvArgs = {
  acrd_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycheckLoginCredentialsArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type QuerycompteursAllEmployeesArgs = {
  salId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycompteursEmployeeArgs = {
  salId: Scalars['Int']['input'];
};


export type QuerycurrentPeriodPointageDaysArgs = {
  cntId: Scalars['Int']['input'];
};


export type QuerycurrentTitreTransportByEsalIdArgs = {
  esalId: Scalars['Int']['input'];
};


export type QuerycurrentTitreTransportBySalIdArgs = {
  salId: Scalars['Int']['input'];
};


export type QuerydemandesAdmEnCoursArgs = {
  esdivTypes?: InputMaybe<Array<Scalars['Int']['input']>>;
  salToSearch?: InputMaybe<SalToSearch>;
};


export type QuerydernierNetArgs = {
  salId: Scalars['Int']['input'];
};


export type QuerydocumentsByDocLinkIdArgs = {
  docLink: Scalars['String']['input'];
  docLinkId: Scalars['Int']['input'];
};


export type QuerydocumentsSalarieArgs = {
  excludeBulletins?: InputMaybe<Scalars['Boolean']['input']>;
  limitBulletin?: InputMaybe<Scalars['Int']['input']>;
  salId: Scalars['Int']['input'];
  salType: Scalars['String']['input'];
};


export type QuerydroitsMaintienSalaireArgs = {
  inputDroitsMaintien: InputDroitsMaintien;
};


export type QueryechelonsArgs = {
  nivc_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryecntsArgs = {
  currentsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  ecntIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  leaveThisMonth?: InputMaybe<Scalars['Boolean']['input']>;
  showBasculedEcnt?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryemploisArgs = {
  acrd_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryesaiPeriArgs = {
  endPeri?: InputMaybe<Scalars['Int']['input']>;
  esaiId?: InputMaybe<Scalars['Int']['input']>;
  startPeri?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryesalsArgs = {
  lotIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  showBasculedEsal?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryesdrasArgs = {
  esdraStatus?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryetapesPaieArgs = {
  lotIds: Array<Scalars['Int']['input']>;
  peris?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryfilieresArgs = {
  acrd_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetContratsArgs = {
  cntIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  currentsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  leaveThisMonth?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerygetCotisationsFraisDeSanteArgs = {
  salId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetCotisationsFraisSanteApplicablesArgs = {
  infosCntParams: InfosCntInput;
};


export type QuerygetEdepsArgs = {
  getEdepsInput?: InputMaybe<GetEdepsInput>;
};


export type QuerygetEvvasArgs = {
  cntIds: Array<Scalars['Int']['input']>;
  currentPeriOnly?: InputMaybe<Scalars['Boolean']['input']>;
  ecntIds: Array<Scalars['Int']['input']>;
  varIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QuerygetEvvasFromPreviousMonthArgs = {
  lotId: Scalars['Int']['input'];
};


export type QuerygetLivrablesArgs = {
  aetaType?: InputMaybe<Scalars['Int']['input']>;
  endPeri?: InputMaybe<Scalars['Int']['input']>;
  isVersionDef?: InputMaybe<Scalars['Boolean']['input']>;
  lotIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startPeri?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetLivrablesSalarieArgs = {
  salId: Scalars['Int']['input'];
  salType: Scalars['String']['input'];
};


export type QuerygetPencArgs = {
  cntId: Scalars['Int']['input'];
  showUnactive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerygetPesstaFromContratArgs = {
  cntType: Scalars['String']['input'];
  contratId: Scalars['Int']['input'];
};


export type QuerygetRecommandedPeriodeEssaiArgs = {
  recommendedPeriodEssaiInput: RecommendedPeriodEssaiInput;
};


export type QuerygetRecommandedPeriodeEssaiByCntIdArgs = {
  cntId: Scalars['Int']['input'];
};


export type QuerygetSituationSalarieByEsalIdArgs = {
  esal_id: Scalars['Int']['input'];
};


export type QuerygetSituationSalarieBySalIdArgs = {
  sal_id: Scalars['Int']['input'];
};


export type QuerygetVisiteMedicaleByIdArgs = {
  vmeId: Scalars['Int']['input'];
};


export type QuerygetVisitesMedicalesArgs = {
  esalIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  fromDate?: InputMaybe<Scalars['Date']['input']>;
  salIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  vmeStatuts?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QuerygetVvasArgs = {
  cntIds: Array<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  niveau?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  peri?: InputMaybe<Scalars['Int']['input']>;
  varIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QuerygetVvasContratActivesArgs = {
  lots_id: Array<Scalars['Int']['input']>;
  saisissableOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryinfosAbsencesSalArgs = {
  dateToFilter?: InputMaybe<DateToFilterInput>;
  salToSearch?: InputMaybe<SalToSearchInput>;
  statuts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type QueryinfosCntArgs = {
  infosCntInput: InfosCntInput;
};


export type QueryinfosDemandeArgs = {
  wdmId: Scalars['Int']['input'];
};


export type QueryinfosForValidationAbsenceArgs = {
  wfrsIds: Array<Scalars['Int']['input']>;
};


export type QueryinfosListeAbsencesMgrArgs = {
  type?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryinfosListeDemandesAdmMgrArgs = {
  type?: InputMaybe<Scalars['Int']['input']>;
  wdmIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  wftIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryinfosListeDemandesAdmSalArgs = {
  type?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryinfosPaiementsArgs = {
  lotIds: Array<Scalars['Int']['input']>;
  periode?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryjoursFeriesLegauxArgs = {
  years?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QuerylastBulFromCntArgs = {
  cntId: Scalars['Int']['input'];
};


export type QuerylastRemArgs = {
  cntId?: InputMaybe<Scalars['Int']['input']>;
  ecntId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerylistEsalArgs = {
  esalIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  showBasculedEsal?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerylistSalArgs = {
  salIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  showBasculedEcnt?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerylisteCommunesArgs = {
  filter: CmuFilter;
};


export type QueryminStageGratificationArgs = {
  minStageGratificationInput: MinStageGratificationInput;
};


export type QuerymodesPaiementArgs = {
  forSalarie?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerymotifDepartArgs = {
  mtfId: Scalars['Int']['input'];
};


export type QuerymotifsDepartsCompatiblesArgs = {
  dpubId?: InputMaybe<Scalars['Int']['input']>;
  ncntId: Scalars['Int']['input'];
};


export type QuerymsalsApplicablesArgs = {
  dateDebutArret: Scalars['DateTime']['input'];
  martId: Scalars['Int']['input'];
  salId: Scalars['Int']['input'];
};


export type QuerynaturesContratArgs = {
  useNcdConfigs?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryniveauxConvArgs = {
  acrd_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerynotificationsArgs = {
  unread?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryperiodsToSubmitArgs = {
  cntId: Scalars['Int']['input'];
};


export type QueryplanningEmployeurArgs = {
  endDate: Scalars['DateTime']['input'];
  esalIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  salIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  startDate: Scalars['DateTime']['input'];
};


export type QueryplanningManagerArgs = {
  endDate: Scalars['DateTime']['input'];
  planningIncludeMgr: Scalars['Boolean']['input'];
  startDate: Scalars['DateTime']['input'];
};


export type QueryplanningSalArgs = {
  endDate: Scalars['DateTime']['input'];
  planningIncludeMgr: Scalars['Boolean']['input'];
  startDate: Scalars['DateTime']['input'];
};


export type QuerypositionsConvArgs = {
  acrd_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryprofilPlanningArgs = {
  pplaId: Scalars['Int']['input'];
};


export type QueryprofilRemFromCntArgs = {
  cntId: Scalars['Int']['input'];
};


export type QuerysalarieDataArgs = {
  salId: Scalars['Int']['input'];
  showBasculedEcnt?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerysalariesArgs = {
  currentSalsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  salIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QuerysmicMensuelArgs = {
  peri: Scalars['Int']['input'];
};


export type QuerystatutHandicapOfSalarieArgs = {
  salId: Scalars['Int']['input'];
  salType: Scalars['String']['input'];
};


export type QuerytypesContratAideArgs = {
  useDpdConfigs?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryutiInfosArgs = {
  params: UtiInfosParams;
};


export type QueryvalidateBicAndIbanArgs = {
  bic?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
};


export type QueryvcalsArgs = {
  lotsIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Motif de recours CDD */
export type Rcdd = {
  __typename: 'Rcdd';
  id: Scalars['ID']['output'];
  /** Code DADS */
  rcdd_codedads: Maybe<Scalars['String']['output']>;
  /** Code DSN */
  rcdd_codedsn: Scalars['String']['output'];
  rcdd_id: Scalars['Int']['output'];
  /** Libellé */
  rcdd_lib: Maybe<Scalars['String']['output']>;
  /** Saisie obligatoire de la justification du motif de recours */
  rcdd_motif_justif_obligatoire: Scalars['Boolean']['output'];
};

export type RecommandedPeriodEssai = {
  __typename: 'RecommandedPeriodEssai';
  acrd_lib: Maybe<Scalars['String']['output']>;
  explications: Maybe<Scalars['String']['output']>;
  nbMaxPeriodeInitiale: Scalars['Int']['output'];
  nbMaxPeriodeRenouv: Maybe<Scalars['Int']['output']>;
  renouvAutorise: Scalars['Boolean']['output'];
  unite: Scalars['String']['output'];
  warningMessage: Maybe<Scalars['String']['output']>;
};

export type RecommendedPeriodEssaiInput = {
  dpub_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_datefin_duree_minimale?: InputMaybe<Scalars['Date']['input']>;
  ecnt_debut_date: Scalars['Date']['input'];
  ecnt_fin_date?: InputMaybe<Scalars['Date']['input']>;
  emp_id: Scalars['Int']['input'];
  empc_id: Scalars['Int']['input'];
  eta_id: Scalars['Int']['input'];
  lot_id: Scalars['Int']['input'];
  ncnt_id: Scalars['Int']['input'];
  peri: Scalars['Int']['input'];
  rcdd_id?: InputMaybe<Scalars['Int']['input']>;
  trem_id?: InputMaybe<Scalars['Int']['input']>;
};

export type RegleAltMinRem = {
  __typename: 'RegleAltMinRem';
  acrdId: Scalars['Int']['output'];
  acrdLib: Scalars['String']['output'];
  ageMax: Maybe<Scalars['Int']['output']>;
  ageMin: Maybe<Scalars['Int']['output']>;
  anneeExec: Maybe<Scalars['Int']['output']>;
  niveauDiplomeAvantMax: Maybe<Scalars['String']['output']>;
  niveauDiplomeAvantMin: Maybe<Scalars['String']['output']>;
  niveauDiplomePrepareMax: Maybe<Scalars['String']['output']>;
  niveauDiplomePrepareMin: Maybe<Scalars['String']['output']>;
  pctSalMinConv: Maybe<Scalars['Int']['output']>;
  pctSmic: Maybe<Scalars['Int']['output']>;
};

export type RequestZdInput = {
  description: Scalars['String']['input'];
  files: Array<Scalars['Upload']['input']>;
  monthValue: Scalars['String']['input'];
  natureDemandeValue: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  salsDescRelated: Array<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
};

export type ResultJf = {
  __typename: 'ResultJf';
  date: Scalars['String']['output'];
  specificZones: Maybe<Array<ZoneSpecifiqueJoursFeries>>;
  type: TypeJourFerie;
};

export type ResultPeriodesMaintien = {
  __typename: 'ResultPeriodesMaintien';
  carence: Carence;
  explain: Scalars['String']['output'];
  explainSyntheseIndemnisation: Scalars['String']['output'];
  periodesMaintien: Array<PeriodeMaintien>;
};

export type ResultProfilCpAncAuto = {
  __typename: 'ResultProfilCpAncAuto';
  profilesSelected: Array<Pcpa>;
};

export type ResultProfilCpAuto = {
  __typename: 'ResultProfilCpAuto';
  profilesSelected: Array<Pacp>;
};

export type ResultProfilPlanningAuto = {
  __typename: 'ResultProfilPlanningAuto';
  allProfiles: Array<Ppla>;
  profilesSelected: Array<Ppla>;
};

export type ResultProfilRemAuto = {
  __typename: 'ResultProfilRemAuto';
  profilesSelected: Array<Pare>;
};

export type ResultPrttAuto = {
  __typename: 'ResultPrttAuto';
  allProfiles: Array<Prtt>;
  profilesSelected: Array<Prtt>;
};

export type Rorg = {
  __typename: 'Rorg';
  id: Scalars['ID']['output'];
  /** Do not exists in Rorg */
  org: Maybe<Org>;
  org_id: Scalars['Int']['output'];
  rorg_id: Scalars['Int']['output'];
  tor_id: Scalars['Int']['output'];
};

/** Salarié */
export type Sal = {
  __typename: 'Sal';
  bnqs: Maybe<Bnqs>;
  cnts: Maybe<Array<Cnt>>;
  ecnts: Maybe<Array<Ecnt>>;
  iad_data: Maybe<Array<Iad>>;
  id: Scalars['ID']['output'];
  last_cnt: Maybe<Cnt>;
  last_ecnt: Maybe<Ecnt>;
  /** Obsolète */
  mdp_id: Maybe<Scalars['Int']['output']>;
  /** Do not exists in Sal */
  nationalite_desc: Maybe<Scalars['String']['output']>;
  /** Id du Dossier de paie dans lequel a été créé le salarié */
  pad_id: Scalars['Int']['output'];
  pays_adresse_desc: Maybe<Scalars['String']['output']>;
  pays_naissance_desc: Maybe<Scalars['String']['output']>;
  pys_libelle_court: Maybe<Scalars['String']['output']>;
  /** Code postal */
  sal_adresse_codepostal: Scalars['String']['output'];
  /** Commune */
  sal_adresse_commune_nom: Scalars['String']['output'];
  /** Complément adresse */
  sal_adresse_constr_cplt: Scalars['String']['output'];
  /** Adresse: pays */
  sal_adresse_pays_id: Maybe<Scalars['Int']['output']>;
  /** Complément voie */
  sal_adresse_voie_cplt: Maybe<Scalars['String']['output']>;
  /** Adresse Voie */
  sal_adresse_voie_desc: Maybe<Scalars['String']['output']>;
  /** Date d'ancienneté */
  sal_anciennete_date: Maybe<Scalars['Date']['output']>;
  /** Obsolète */
  sal_compta_cpteauxiliaire: Scalars['String']['output'];
  /** Obsolète */
  sal_compta_cptegeneral: Scalars['String']['output'];
  /** Obsolète */
  sal_cpam_rattachement_org_id: Maybe<Scalars['Int']['output']>;
  /** Date d'entrée dans l'entreprise */
  sal_date_entree: Maybe<Scalars['Date']['output']>;
  /** Adresse email */
  sal_email: Maybe<Scalars['String']['output']>;
  sal_id: Scalars['Int']['output'];
  /** Id du salarié pour utilisation par une application externe */
  sal_id_externe: Maybe<Scalars['String']['output']>;
  /** Matricule */
  sal_matricule: Scalars['String']['output'];
  /** Lieu de naissance */
  sal_naissance_commune_nom: Scalars['String']['output'];
  /** Date de naissance */
  sal_naissance_date: Scalars['Date']['output'];
  /** Id du pays de naissance(voir type Pays) */
  sal_naissance_pays_id: Maybe<Scalars['Int']['output']>;
  /** Id Pays nationalité */
  sal_nationalite_id: Maybe<Scalars['Int']['output']>;
  /** NIR */
  sal_nir: Scalars['String']['output'];
  /** Clé du NIR */
  sal_nir_cle: Scalars['String']['output'];
  /** Nom de naissance */
  sal_nom_famille: Scalars['String']['output'];
  /** Nom d'usage  */
  sal_nom_usage: Scalars['String']['output'];
  /** Observations */
  sal_obs: Maybe<Scalars['String']['output']>;
  /** Prénom */
  sal_prenom: Scalars['String']['output'];
  /** Prénoms exact dans l'état civil */
  sal_prenoms_etat_civil: Scalars['String']['output'];
  /** Obsolète */
  sal_prudh_college: Scalars['String']['output'];
  /** Obsolète */
  sal_prudh_sectionencadr: Scalars['Boolean']['output'];
  /** Obsolète */
  sal_pseudonyme: Maybe<Scalars['String']['output']>;
  /**
   * Homme = 1
   * Femme = 2
   */
  sal_sexe: Maybe<Scalars['Int']['output']>;
  /** Non utilisé */
  sal_simul: Scalars['Boolean']['output'];
  /** Tél. 1 */
  sal_tel_1: Maybe<Scalars['String']['output']>;
  /** Tél. 2 */
  sal_tel_2: Maybe<Scalars['String']['output']>;
  /** Ventilation comptable */
  sal_ventil_compta: Maybe<Scalars['String']['output']>;
  uti: Maybe<Uti>;
};

/** This type differs too much from the actual Document type so it has it's own (as an exemple the doc_id can either a ppa_id(bulletin) or a real doc_id from the doc table ) */
export type SalDocument = {
  __typename: 'SalDocument';
  additional_infos: AdditionalDocInfos;
  doc_afficher_portail_salarie: Maybe<Scalars['Boolean']['output']>;
  doc_desc: Scalars['String']['output'];
  doc_id: Scalars['String']['output'];
  doc_mime_type: Maybe<Scalars['String']['output']>;
  doc_type: Scalars['Int']['output'];
  doc_type_desc: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  publish_date: Maybe<Scalars['DateTime']['output']>;
  sal_id: Scalars['Int']['output'];
};

export type SalToSearch = {
  salId: Scalars['Int']['input'];
  salType: Scalars['String']['input'];
};

export type SalToSearchInput = {
  salType: Scalars['String']['input'];
  salarieId: Scalars['Int']['input'];
};

/** Dossier sélectionné */
export type SelectedFolder = {
  __typename: 'SelectedFolder';
  /** Informations autour du dossier vis à vis du contrat en cours/agents utilisateurs */
  crm: Maybe<PadCRM>;
  /** dossier   */
  pad: Pad;
  /** Paramétrage interface API portail absences externe */
  ppabs: Maybe<Ppabs>;
  /** Profil du portail gestion des demandes d'absences   */
  prga: Maybe<Prga>;
  /** Profil du portail gestion des présences */
  prgp: Maybe<Prgp>;
  /** Liste des profils d'UI (legacy - non utilisé côté portail) */
  pruis: Array<Prui>;
  /** Paramétrage signature électronique */
  psign: Maybe<Psign>;
  /** Types d'UI / Rôles activés dans ce dossier (Employeur, Manageur, Salarié) */
  typesUi: Array<TypeUi>;
  /** Config des workflows paramétrés pour le dossier */
  wfps: Array<Wfp>;
};

export type SituationSalarialeEsal = {
  __typename: 'SituationSalarialeEsal';
  adresse: Esal;
  bnqs: Maybe<Bnqs>;
};

export type SituationSalarialeSal = {
  __typename: 'SituationSalarialeSal';
  adresse: Sal;
  bnqs: Maybe<Bnqs>;
};

export type SmicMensuel = {
  __typename: 'SmicMensuel';
  montant: Scalars['Float']['output'];
  periDebutVigueur: Scalars['Int']['output'];
};

export type Src = {
  __typename: 'Src';
  id: Scalars['ID']['output'];
  /** #Do not exists in Src */
  src_desc: Maybe<Scalars['String']['output']>;
  src_id: Scalars['Int']['output'];
  src_lib: Maybe<Scalars['String']['output']>;
  src_ordre: Scalars['Int']['output'];
};

export type Statut = {
  __typename: 'Statut';
  src_desc: Maybe<Scalars['String']['output']>;
  src_id: Scalars['Int']['output'];
};

export type StatutTravHand = {
  __typename: 'StatutTravHand';
  id: Scalars['ID']['output'];
  trav_hand_id: Scalars['Int']['output'];
  trav_hand_lib: Scalars['String']['output'];
};

export type StatutTravHandSal = {
  __typename: 'StatutTravHandSal';
  trav_hand_date_reco: Maybe<Scalars['Date']['output']>;
  trav_hand_id: Maybe<Scalars['Int']['output']>;
};

export type Stvar = {
  __typename: 'Stvar';
  id: Scalars['ID']['output'];
  stvar_id: Scalars['Int']['output'];
  stvar_lib: Scalars['String']['output'];
  tvar_id: Maybe<Scalars['Int']['output']>;
};

export type Tab = {
  __typename: 'Tab';
  id: Scalars['ID']['output'];
  /** Motif d'arrêt  */
  mart_id: Maybe<Scalars['Int']['output']>;
  /** Informations à afficher par défaut */
  tab_cal_template: Maybe<Scalars['String']['output']>;
  /** Code */
  tab_code: Scalars['String']['output'];
  /** Décompter les jours fériés compris dans la période d'absence ? */
  tab_decompter_jf_qte_retenue: Scalars['Boolean']['output'];
  /** Explications affichées */
  tab_espace_emp_explications: Maybe<Scalars['String']['output']>;
  /** Obsolete ? */
  tab_est_carence: Maybe<Scalars['Boolean']['output']>;
  tab_id: Scalars['Int']['output'];
  /** Libellé */
  tab_lib: Scalars['String']['output'];
  /** Libelle interne */
  tab_lib_interne: Scalars['String']['output'];
  /** Rétablir le salaire pour le calcul des IJSS ? */
  tab_retablir_salaire_ijss: Scalars['Boolean']['output'];
  /** Taux de maintien */
  tab_taux_maintien: Maybe<Scalars['Float']['output']>;
  /**
   * Pas de sélection = 1
   * Tous les dossiers sauf = 2
   * Uniquement les dossiers suivants = 3
   */
  tab_typeliendospay: Scalars['Int']['output'];
};

export type Tat = {
  __typename: 'Tat';
  /** Do no exist in Tat */
  coderisque: Maybe<Scalars['String']['output']>;
  desc: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sat_estbureau: Maybe<Scalars['Boolean']['output']>;
  tat_id: Scalars['Int']['output'];
  tat_peridebut: Scalars['Int']['output'];
  tat_perifin: Maybe<Scalars['Int']['output']>;
  tat_valeurtaux: Scalars['Float']['output'];
};

/** Type d'absence pour calcul solde prévisionnel */
export type Tcga = {
  __typename: 'Tcga';
  /** Cumul     */
  cga_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** Type d'absence     */
  tab_id: Scalars['Int']['output'];
  tcga_id: Scalars['Int']['output'];
};

/** Paramétrage type d'absence/portail demandes d'absences */
export type Tga = {
  __typename: 'Tga';
  id: Scalars['ID']['output'];
  /** Profil de demandes d'absences  */
  prga_id: Scalars['Int']['output'];
  /** Type d'absence  */
  tab_id: Scalars['Int']['output'];
  /** Do not exist in Tga */
  tab_lib: Maybe<Scalars['String']['output']>;
  /** Commentaire à afficher lors de la saisie de la demande d'absence  */
  tga_comments_sal: Maybe<Scalars['String']['output']>;
  tga_id: Scalars['Int']['output'];
  /** Libellé personnalisé pour portail Collaborateur(Motif d'absence) */
  tga_lib_sal: Maybe<Scalars['String']['output']>;
  /** Nb max.de pièce(s) jointe(s) autorisé  */
  tga_nb_pj_max: Maybe<Scalars['Int']['output']>;
  /** Nb min.de pièce(s) jointe(s) requis  */
  tga_nb_pj_min: Maybe<Scalars['Int']['output']>;
  /** Message affiché quand la demande est rejetée   */
  tga_plancher_bloquant_message_perso: Maybe<Scalars['String']['output']>;
  /** Comportement si compteur prévisionnel en dessous du seuil(legacy)  */
  tga_plancher_comportement: Scalars['Int']['output'];
  /** Plancher à ne pas dépasser  */
  tga_plancher_valeur: Maybe<Scalars['Int']['output']>;
  /** Message d'avertissement quand la demande est autorisée (legacy) */
  tga_plancher_warning_message_perso: Maybe<Scalars['String']['output']>;
  /** Autoriser la saisie en heures */
  tga_saisie_heures_autorisee: Scalars['Boolean']['output'];
};

export type Tor = {
  __typename: 'Tor';
  id: Scalars['ID']['output'];
  tor_dsn_mdp_ids: Maybe<Array<Scalars['Int']['output']>>;
  tor_id: Scalars['Int']['output'];
  tor_lib_employeur: Scalars['String']['output'];
  tor_libelle: Scalars['String']['output'];
  tor_requiert_affiliation: Scalars['Boolean']['output'];
};

export type Trem = {
  __typename: 'Trem';
  id: Scalars['ID']['output'];
  trem_dads_code: Maybe<Scalars['String']['output']>;
  trem_dsn_code: Scalars['String']['output'];
  trem_id: Scalars['Int']['output'];
  trem_lib: Scalars['String']['output'];
};

export type Tsh = {
  __typename: 'Tsh';
  cnt_id: Scalars['Int']['output'];
  demandeInfos: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  pointages: Maybe<Array<Pta>>;
  sal_id: Maybe<Scalars['Int']['output']>;
  sal_matricule: Maybe<Scalars['String']['output']>;
  /** Do not exist in Tsh */
  sal_nom_usage: Maybe<Scalars['String']['output']>;
  sal_prenom: Maybe<Scalars['String']['output']>;
  tsh_comment: Maybe<Scalars['String']['output']>;
  tsh_date_end: Scalars['Date']['output'];
  tsh_date_start: Scalars['Date']['output'];
  tsh_datetime_submitted: Scalars['Date']['output'];
  tsh_id: Scalars['Int']['output'];
  tsh_submitter_uti_id: Scalars['Int']['output'];
  vts: Maybe<Vts>;
};

export type Ttra = {
  __typename: 'Ttra';
  id: Scalars['ID']['output'];
  /** #Do not exists in ttra */
  sal: Maybe<Sal>;
  sal_id: Scalars['Int']['output'];
  ttra_date_emission: Maybe<Scalars['Date']['output']>;
  ttra_date_fin_validite: Scalars['Date']['output'];
  ttra_id: Scalars['Int']['output'];
  ttra_lieu_delivr: Maybe<Scalars['String']['output']>;
  ttra_nom_administration: Maybe<Scalars['String']['output']>;
  ttra_num: Maybe<Scalars['String']['output']>;
  ttra_renouv: Scalars['Boolean']['output'];
  tytr_id: Scalars['Int']['output'];
  tytr_lib: Scalars['String']['output'];
};

export type Tvme = {
  __typename: 'Tvme';
  id: Scalars['ID']['output'];
  tvme_id: Scalars['Int']['output'];
  tvme_lib: Scalars['String']['output'];
  tvme_long_comment: Maybe<Scalars['String']['output']>;
  tvme_nature_controle: Maybe<Scalars['Int']['output']>;
  tvme_short_comment: Maybe<Scalars['String']['output']>;
};

export enum TypeJourFerie {
  AbolitionEsclavage = 'AbolitionEsclavage',
  AlsaceSaintEtienne = 'AlsaceSaintEtienne',
  AlsaceVendrediSaint = 'AlsaceVendrediSaint',
  Armistice = 'Armistice',
  ArriveeEvangile = 'ArriveeEvangile',
  Ascension = 'Ascension',
  Assomption = 'Assomption',
  FeteAutonomie = 'FeteAutonomie',
  FeteCitoyennet = 'FeteCitoyennet',
  FeteDesMorts = 'FeteDesMorts',
  FeteDuTerritoire = 'FeteDuTerritoire',
  FeteNationale = 'FeteNationale',
  FeteTravail = 'FeteTravail',
  FeteVictorSchoelcher = 'FeteVictorSchoelcher',
  JourAn = 'JourAn',
  LundiPaques = 'LundiPaques',
  LundiPentecote = 'LundiPentecote',
  Noel = 'Noel',
  SaintPierreChanel = 'SaintPierreChanel',
  SaintsPierreEtPaul = 'SaintsPierreEtPaul',
  Toussaint = 'Toussaint',
  Victoire1945 = 'Victoire1945'
}

/** Tpe d'interface utilisateur / Rôle (exemples: employeur, manager, salarié) */
export type TypeUi = {
  __typename: 'TypeUi';
  /**
   * Description du rôle (exemple : "Utilisateur ayant besoin d'effectuer des demandes d'absences ou de déclarations de présences, de consulter ses bulletins, attestations...")
   * Legacy non utilisé dans le portail
   */
  desc: Scalars['String']['output'];
  /** Indique si l'utilisateur est en mode archivage */
  isModeArchivage: Scalars['Boolean']['output'];
  /** Indique si l'utilisateur est en readOnly avec ce role */
  isReadOnly: Scalars['Boolean']['output'];
  /** Gestion des accès aux lots activée si true (legacy - non utilisé côté portail)     */
  is_lots_access_defined: Scalars['Boolean']['output'];
  /** Liste des lots accessibles(legacy - non utilisé côté portail)         */
  lots_granted: Array<Maybe<Scalars['Int']['output']>>;
  /** Menus (legacy - non utilisé dans le portail)     */
  menus: Maybe<Array<Maybe<MenuParam>>>;
  /** Nom du rôle (exemple : "Salarié")     */
  name: Scalars['String']['output'];
  type: Scalars['Int']['output'];
};

export type Tytr = {
  __typename: 'Tytr';
  id: Scalars['ID']['output'];
  tytr_comment: Maybe<Scalars['String']['output']>;
  tytr_duree_validite_max_annees: Maybe<Scalars['String']['output']>;
  tytr_id: Scalars['Int']['output'];
  tytr_lib: Scalars['String']['output'];
  tytr_renouvelable: Maybe<Scalars['Boolean']['output']>;
};

export type Uct = {
  __typename: 'Uct';
  cnt_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  rind_id: Scalars['Int']['output'];
  uct_datedebut: Scalars['Date']['output'];
  uct_datefin: Maybe<Scalars['Date']['output']>;
  uct_id: Scalars['Int']['output'];
  uct_peridebut: Scalars['Int']['output'];
  uct_perifin: Maybe<Scalars['Int']['output']>;
  /**
   * #Do not exists in Pacp
   *     unité d'organisation sur laquelle le contrat est attaché
   */
  uorg: Maybe<Uorg>;
  uorg_id: Scalars['Int']['output'];
};

export type Uorg = {
  __typename: 'Uorg';
  id: Scalars['ID']['output'];
  /**
   * #Do not exists in Uorg
   *     Niveau d'unité
   */
  nrg: Maybe<Nrg>;
  nrg_id: Scalars['Int']['output'];
  uorg_code: Scalars['String']['output'];
  uorg_id: Scalars['Int']['output'];
  uorg_lib: Scalars['String']['output'];
  uorg_superieur_id: Maybe<Scalars['Int']['output']>;
};

export type UpdateBnqs = {
  bnqs_bic?: InputMaybe<Scalars['String']['input']>;
  bnqs_domic?: InputMaybe<Scalars['String']['input']>;
  bnqs_iban?: InputMaybe<Scalars['String']['input']>;
  bnqs_titu?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEabsInput = {
  absCommenceAprem: Scalars['Boolean']['input'];
  absFinitMatin: Scalars['Boolean']['input'];
  eabsDateDebut: Scalars['Date']['input'];
  eabsDateFin: Scalars['Date']['input'];
  eabsExternalId?: InputMaybe<Scalars['String']['input']>;
  eabsId: Scalars['Int']['input'];
  files?: InputMaybe<Array<Scalars['Upload']['input']>>;
  nbHeures?: InputMaybe<Scalars['Float']['input']>;
  tabId: Scalars['Int']['input'];
  typeUniteAbsence: Scalars['Int']['input'];
};

export type UpdateEartInput = {
  eart_date_accident?: InputMaybe<Scalars['DateTime']['input']>;
  eart_date_fin_previs: Scalars['DateTime']['input'];
  eart_date_reception_employeur?: InputMaybe<Scalars['DateTime']['input']>;
  eart_date_redaction: Scalars['DateTime']['input'];
  eart_date_reprise?: InputMaybe<Scalars['DateTime']['input']>;
  eart_debut_subro?: InputMaybe<Scalars['DateTime']['input']>;
  eart_der_jour_trav?: InputMaybe<Scalars['DateTime']['input']>;
  eart_derogatoire_covid?: InputMaybe<Scalars['Boolean']['input']>;
  eart_djt_matin_seulement: Scalars['Boolean']['input'];
  eart_est_subro: Scalars['Boolean']['input'];
  eart_fin_subro?: InputMaybe<Scalars['DateTime']['input']>;
  eart_id: Scalars['Int']['input'];
  eart_init_ou_pro: Scalars['Int']['input'];
  eart_initial_art_id?: InputMaybe<Scalars['Int']['input']>;
  eart_initial_eart_id?: InputMaybe<Scalars['Int']['input']>;
  eart_motif_covid?: InputMaybe<Scalars['Int']['input']>;
  eart_motif_reprise?: InputMaybe<Scalars['Int']['input']>;
  eart_nbj_maintien_choisi?: InputMaybe<Scalars['Int']['input']>;
  eart_reprise_aprem: Scalars['Boolean']['input'];
  mart_id: Scalars['Int']['input'];
  msal_id_choisi?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateEcntInput = {
  acrd_id?: InputMaybe<Scalars['Int']['input']>;
  aff_id?: InputMaybe<Scalars['Int']['input']>;
  catc_id?: InputMaybe<Scalars['Int']['input']>;
  cdpre_id?: InputMaybe<Scalars['Int']['input']>;
  coeff?: InputMaybe<Scalars['Int']['input']>;
  dpub_id?: InputMaybe<Scalars['Int']['input']>;
  ech_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_a_quot_trav_specifique?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_acompte_mdp_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_alternance_has_salaire_fixe?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_alternance_motif_derog?: InputMaybe<Scalars['String']['input']>;
  ecnt_alternance_periodes?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ecnt_cappr_code_niveau_diplome_prepare?: InputMaybe<Scalars['String']['input']>;
  ecnt_cdpre_date_fin?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_cprev_adhesions?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ecnt_cumul_emploi_retraite: Scalars['Boolean']['input'];
  ecnt_custom_profil_planning?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ecnt_date_envoi?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_date_reception?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_datefin_alternance?: InputMaybe<Scalars['Date']['input']>;
  ecnt_datefin_duree_minimale?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_datefin_essai?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_datefin_essai_renouv?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_datefin_prevue?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_debut_date: Scalars['DateTime']['input'];
  ecnt_debut_periode_souplesse?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_dpae_choix_transmission?: InputMaybe<Scalars['Int']['input']>;
  ecnt_dpae_dateheure_gene?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_est_tauxat_support?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_fin_date?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_fin_periode_souplesse?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_has_periode_essai: Scalars['Boolean']['input'];
  ecnt_heure_embauche?: InputMaybe<Scalars['String']['input']>;
  ecnt_heure_embauche_reelle?: InputMaybe<Scalars['DateTime']['input']>;
  ecnt_heure_fin?: InputMaybe<Scalars['String']['input']>;
  ecnt_heure_supp?: InputMaybe<Scalars['Float']['input']>;
  ecnt_id: Scalars['Int']['input'];
  ecnt_is_stage_rem?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_justif_recours_cdd?: InputMaybe<Scalars['String']['input']>;
  ecnt_montant_salaire?: InputMaybe<Scalars['Float']['input']>;
  ecnt_nb_heures_decla_jour_solidarite?: InputMaybe<Scalars['Float']['input']>;
  ecnt_notes?: InputMaybe<Scalars['String']['input']>;
  ecnt_num?: InputMaybe<Scalars['String']['input']>;
  ecnt_penc?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ecnt_ppla_date_debut_cycle?: InputMaybe<Scalars['Date']['input']>;
  ecnt_prev_dispense_date_fin?: InputMaybe<Scalars['Date']['input']>;
  ecnt_prev_dispense_motif_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_pro_niveau_etude?: InputMaybe<Scalars['Int']['input']>;
  ecnt_quot_trav?: InputMaybe<Scalars['Float']['input']>;
  ecnt_quot_trav_spec_raison?: InputMaybe<Scalars['Int']['input']>;
  ecnt_rem_heure_supp_included?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_rempla_sal_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_rempla_sal_libre?: InputMaybe<Scalars['String']['input']>;
  ecnt_sal_anciennete_date?: InputMaybe<Scalars['Date']['input']>;
  ecnt_salaire_mdp_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_sans_terme_precis?: InputMaybe<Scalars['Boolean']['input']>;
  ecnt_soldetc_mdp_id?: InputMaybe<Scalars['Int']['input']>;
  ecnt_stage_nb_heures?: InputMaybe<Scalars['Float']['input']>;
  ecnt_type_decla_jour_solidarite?: InputMaybe<Scalars['Int']['input']>;
  ecnt_type_saisie_salaire: Scalars['Int']['input'];
  ecnt_type_tps_partiel_cotisant_tps_plein?: InputMaybe<Scalars['Int']['input']>;
  ecnt_vme_future_date?: InputMaybe<Scalars['Date']['input']>;
  ecnt_vme_passee_date?: InputMaybe<Scalars['Date']['input']>;
  ect_lib?: InputMaybe<Scalars['String']['input']>;
  emp_id?: InputMaybe<Scalars['Int']['input']>;
  empc_id?: InputMaybe<Scalars['Int']['input']>;
  eta_id: Scalars['Int']['input'];
  euti_id?: InputMaybe<Scalars['Int']['input']>;
  fil_id?: InputMaybe<Scalars['Int']['input']>;
  lot_id: Scalars['Int']['input'];
  mnvi_id?: InputMaybe<Scalars['Int']['input']>;
  ncnt_id: Scalars['Int']['input'];
  nivc_id?: InputMaybe<Scalars['Int']['input']>;
  pacp_id_force?: InputMaybe<Scalars['Int']['input']>;
  pare_id_force?: InputMaybe<Scalars['Int']['input']>;
  pcpa_id_force?: InputMaybe<Scalars['Int']['input']>;
  ppla_id_force?: InputMaybe<Scalars['Int']['input']>;
  prtt_id_force?: InputMaybe<Scalars['Int']['input']>;
  rcdd_id?: InputMaybe<Scalars['Int']['input']>;
  sal_id_tuteur?: InputMaybe<Scalars['Int']['input']>;
  src_id?: InputMaybe<Scalars['Int']['input']>;
  src_id_force?: InputMaybe<Scalars['Int']['input']>;
  trem_id?: InputMaybe<Scalars['Int']['input']>;
  uorg_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateEdepInput = {
  edep_a_indem_fin_cdd?: InputMaybe<Scalars['Boolean']['input']>;
  edep_cfc_dep_vol_mnt?: InputMaybe<Scalars['Float']['input']>;
  edep_cfc_mis_retraite?: InputMaybe<Scalars['Float']['input']>;
  edep_contrepartie_non_concurrence?: InputMaybe<Scalars['Float']['input']>;
  edep_csp_mnt_indem_preavis?: InputMaybe<Scalars['Float']['input']>;
  edep_csp_nb_mois_preavis?: InputMaybe<Scalars['Float']['input']>;
  edep_date_fin: Scalars['DateTime']['input'];
  edep_date_notification?: InputMaybe<Scalars['DateTime']['input']>;
  edep_date_paiement?: InputMaybe<Scalars['DateTime']['input']>;
  edep_der_jour_trav?: InputMaybe<Scalars['DateTime']['input']>;
  edep_duree_non_concurrence?: InputMaybe<Scalars['Int']['input']>;
  edep_id: Scalars['Int']['input'];
  edep_indemnite_dep_ret_vol_mnt?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_fin_mandat?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_mise_ret_non_soum?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_rupture_conv?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_rupture_legale?: InputMaybe<Scalars['Float']['input']>;
  edep_indemnite_rupture_totale?: InputMaybe<Scalars['Float']['input']>;
  edep_lic_date_eng_procedure?: InputMaybe<Scalars['DateTime']['input']>;
  edep_mtf_cplt_id?: InputMaybe<Scalars['Int']['input']>;
  edep_peut_beneficier_pension_retraite?: InputMaybe<Scalars['Boolean']['input']>;
  edep_preavis_fait: Scalars['Boolean']['input'];
  edep_preavis_noneffnonpaye: Scalars['Boolean']['input'];
  edep_preavis_noneffnonpaye_datedebut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavis_noneffnonpaye_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavis_noneffpaye: Scalars['Boolean']['input'];
  edep_preavis_noneffpaye_datedebut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavis_noneffpaye_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavisfait_date_debut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_preavisfait_date_fin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_prevenance_effpaye: Scalars['Boolean']['input'];
  edep_prevenance_effpaye_datedebut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_prevenance_effpaye_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_prevenance_noneffpaye: Scalars['Boolean']['input'];
  edep_prevenance_noneffpaye_datedebut?: InputMaybe<Scalars['DateTime']['input']>;
  edep_prevenance_noneffpaye_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  edep_remboursement_dedit_formation?: InputMaybe<Scalars['Float']['input']>;
  edep_rupconv_date_signature?: InputMaybe<Scalars['DateTime']['input']>;
  edep_sdtc_mdp_id: Scalars['Int']['input'];
  edep_transaction_montant?: InputMaybe<Scalars['Float']['input']>;
  edep_transaction_statut?: InputMaybe<Scalars['Int']['input']>;
  edep_vehicule_fonction?: InputMaybe<Scalars['Boolean']['input']>;
  mnvi_id?: InputMaybe<Scalars['Int']['input']>;
  mtf_id: Scalars['Int']['input'];
};

export type UpdateEsalInput = {
  esal_adresse_codepostal: Scalars['String']['input'];
  esal_adresse_commune_nom: Scalars['String']['input'];
  esal_adresse_constr_cplt?: InputMaybe<Scalars['String']['input']>;
  esal_adresse_pays_id?: InputMaybe<Scalars['Int']['input']>;
  esal_adresse_voie_cplt?: InputMaybe<Scalars['String']['input']>;
  esal_adresse_voie_desc: Scalars['String']['input'];
  esal_bnqs_bic?: InputMaybe<Scalars['String']['input']>;
  esal_bnqs_domic?: InputMaybe<Scalars['String']['input']>;
  esal_bnqs_iban?: InputMaybe<Scalars['String']['input']>;
  esal_bnqs_titu?: InputMaybe<Scalars['String']['input']>;
  esal_email?: InputMaybe<Scalars['String']['input']>;
  esal_id: Scalars['Int']['input'];
  esal_matricule?: InputMaybe<Scalars['String']['input']>;
  esal_naissance_commune_nom: Scalars['String']['input'];
  esal_naissance_date: Scalars['Date']['input'];
  esal_naissance_pays_id?: InputMaybe<Scalars['Int']['input']>;
  esal_nationalite_id?: InputMaybe<Scalars['Int']['input']>;
  esal_nir: Scalars['String']['input'];
  esal_nir_cle: Scalars['String']['input'];
  esal_nom_famille: Scalars['String']['input'];
  esal_nom_usage: Scalars['String']['input'];
  esal_prenom: Scalars['String']['input'];
  esal_prenoms_etat_civil?: InputMaybe<Scalars['String']['input']>;
  esal_sexe?: InputMaybe<Scalars['Int']['input']>;
  esal_tel_1?: InputMaybe<Scalars['String']['input']>;
  esal_tel_2?: InputMaybe<Scalars['String']['input']>;
  esal_trav_hand_date_reco?: InputMaybe<Scalars['Date']['input']>;
  esal_trav_hand_id?: InputMaybe<Scalars['Int']['input']>;
  esal_ttra_date_emission?: InputMaybe<Scalars['DateTime']['input']>;
  esal_ttra_date_fin_validite?: InputMaybe<Scalars['DateTime']['input']>;
  esal_ttra_lieu_delivr?: InputMaybe<Scalars['String']['input']>;
  esal_ttra_nom_administration?: InputMaybe<Scalars['String']['input']>;
  esal_ttra_num?: InputMaybe<Scalars['String']['input']>;
  esal_ttra_renouv?: InputMaybe<Scalars['Boolean']['input']>;
  esal_tytr_id?: InputMaybe<Scalars['Int']['input']>;
  mdp_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateEvvasInput = {
  evva_date_debut?: InputMaybe<Scalars['DateTime']['input']>;
  evva_date_fin?: InputMaybe<Scalars['DateTime']['input']>;
  evva_est_regul?: InputMaybe<Scalars['Boolean']['input']>;
  evva_id: Scalars['Int']['input'];
  evva_niveau: Scalars['Int']['input'];
  evva_periode_debut?: InputMaybe<Scalars['Int']['input']>;
  evva_periode_fin?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_commentaire?: InputMaybe<Scalars['String']['input']>;
  evva_regul_motif_id?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_periode_debut?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_periode_fin?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_type?: InputMaybe<Scalars['Int']['input']>;
  evva_regul_valeur?: InputMaybe<Scalars['String']['input']>;
  evva_valeur?: InputMaybe<Scalars['String']['input']>;
  var_id: Scalars['Int']['input'];
};

export type UpdatePesstaInput = {
  pessta_date_fin_essai_confirmation?: InputMaybe<Scalars['Date']['input']>;
  pessta_date_fin_essai_renouv_confirmation?: InputMaybe<Scalars['Date']['input']>;
  pessta_id: Scalars['Int']['input'];
  pessta_renouv?: InputMaybe<Scalars['Boolean']['input']>;
  pessta_valide?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateTtraInput = {
  ttra_date_emission: Scalars['Date']['input'];
  ttra_date_fin_validite: Scalars['Date']['input'];
  ttra_id: Scalars['Int']['input'];
  ttra_lieu_delivr?: InputMaybe<Scalars['String']['input']>;
  ttra_nom_administration?: InputMaybe<Scalars['String']['input']>;
  ttra_num?: InputMaybe<Scalars['String']['input']>;
  ttra_renouv: Scalars['Boolean']['input'];
  tytr_id: Scalars['Int']['input'];
};

export type UpdateUtiParams = {
  pdos_id?: InputMaybe<Scalars['Int']['input']>;
  sal_id?: InputMaybe<Scalars['Int']['input']>;
  uti_access_gestion_interne?: InputMaybe<Scalars['Boolean']['input']>;
  uti_access_kpis?: InputMaybe<Scalars['Boolean']['input']>;
  uti_access_param_dossier?: InputMaybe<Scalars['Boolean']['input']>;
  uti_access_param_generaux?: InputMaybe<Scalars['Boolean']['input']>;
  uti_access_portefeuille?: InputMaybe<Scalars['Boolean']['input']>;
  uti_access_tickets_dev?: InputMaybe<Scalars['Boolean']['input']>;
  uti_access_to_business_dashboard?: InputMaybe<Scalars['Boolean']['input']>;
  uti_access_to_cto_dashboard?: InputMaybe<Scalars['Boolean']['input']>;
  uti_date_debut_acces?: InputMaybe<Scalars['Date']['input']>;
  uti_date_fin_acces?: InputMaybe<Scalars['Date']['input']>;
  uti_display_image_profil?: InputMaybe<Scalars['Boolean']['input']>;
  uti_email?: InputMaybe<Scalars['String']['input']>;
  uti_id: Scalars['Int']['input'];
  uti_last_pwd_manual_change?: InputMaybe<Scalars['DateTime']['input']>;
  uti_last_pwd_regenerate?: InputMaybe<Scalars['DateTime']['input']>;
  uti_nom?: InputMaybe<Scalars['String']['input']>;
  uti_prenom?: InputMaybe<Scalars['String']['input']>;
  uti_pseudo?: InputMaybe<Scalars['String']['input']>;
  uti_reconnection_auto?: InputMaybe<Scalars['Boolean']['input']>;
  uti_superadmin?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateVmeInput = {
  org_id?: InputMaybe<Scalars['Int']['input']>;
  tvme_id: Scalars['Int']['input'];
  vme_attestation_vip_statut?: InputMaybe<Scalars['Int']['input']>;
  vme_date: Scalars['Date']['input'];
  vme_id: Scalars['Int']['input'];
  vme_notes?: InputMaybe<Scalars['String']['input']>;
  vme_resultat_aptitude?: InputMaybe<Scalars['Int']['input']>;
  vme_statut: Scalars['Int']['input'];
  vme_type_motif_reprise?: InputMaybe<Scalars['Int']['input']>;
};

export type UpsertAccessParams = {
  dateDebut: Scalars['DateTime']['input'];
  dateFin?: InputMaybe<Scalars['DateTime']['input']>;
  roles: Array<Scalars['Int']['input']>;
  sal_id?: InputMaybe<Scalars['Int']['input']>;
  uti_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UpsertAvatarInput = {
  file: Scalars['Upload']['input'];
};

export type UpsertDelegationParams = {
  dateDebut: Scalars['DateTime']['input'];
  dateFin?: InputMaybe<Scalars['DateTime']['input']>;
  sal_id_new_mgr: Scalars['Int']['input'];
};

export type UpsertEpacInput = {
  epac_date?: InputMaybe<Scalars['Date']['input']>;
  epac_est_paye?: InputMaybe<Scalars['Boolean']['input']>;
  epac_id?: InputMaybe<Scalars['Int']['input']>;
  liv_id: Scalars['Int']['input'];
  mdp_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UpsertUctInput = {
  cnt_id: Scalars['Int']['input'];
  rind_id: Scalars['Int']['input'];
  uct_datedebut: Scalars['DateTime']['input'];
  uct_datefin?: InputMaybe<Scalars['DateTime']['input']>;
  /** La présence de ce champs signifie qu'on va update cet input */
  uct_id?: InputMaybe<Scalars['Int']['input']>;
  uct_peridebut: Scalars['Int']['input'];
  uct_perifin?: InputMaybe<Scalars['Int']['input']>;
  uorg_id: Scalars['Int']['input'];
};

export type UpsertVlivsInput = {
  liv_id: Scalars['Int']['input'];
  vliv_comment?: InputMaybe<Scalars['String']['input']>;
  vliv_resultat: Scalars['Int']['input'];
};

/** Utilisateur */
export type User = {
  __typename: 'User';
  /** ID de session à copier dans le header de toutes les requêtes	 */
  appSessionId: Scalars['String']['output'];
  /** Liste des dossiers auxquels a accès l'utilisateur. Choisir le dossier avec SelectFolder				 */
  grantedFolders: Array<GrantedFolder>;
  lgi_connexion_dateheure: Maybe<Scalars['DateTime']['output']>;
  /** Le password doit être renouvelé à la connexion	 */
  mustChangePassword: Maybe<Scalars['Boolean']['output']>;
  /** Salarié (ID) correspondant à l'utilisateur */
  sal_id: Maybe<Scalars['Int']['output']>;
  /** Salarié (Matricule)	 */
  sal_matricule: Maybe<Scalars['String']['output']>;
  /** Salarié (Nom d'usage / Nom affiché)		 */
  sal_nom_usage: Maybe<Scalars['String']['output']>;
  /** Salarié (Prénom)	 */
  sal_prenom: Maybe<Scalars['String']['output']>;
  /** Accès aux paramètres du dossier de paie (non utilisé dans le portail)	 */
  uti_access_param_dossier: Maybe<Scalars['Boolean']['output']>;
  /** Accès aux paramètres généraux (non utilisé dans le portail)		 */
  uti_access_param_generaux: Maybe<Scalars['Boolean']['output']>;
  /** Accès au tableau de bord Paie  (non utilisé côté dans le portail salarié)	 */
  uti_access_to_business_dashboard: Scalars['Boolean']['output'];
  /** Activation de l'image de profil (non utilisé dans le portail)			 */
  uti_display_image_profil: Maybe<Scalars['Boolean']['output']>;
  /** Email  */
  uti_email: Maybe<Scalars['String']['output']>;
  uti_id: Scalars['Int']['output'];
  /** Nom  */
  uti_nom: Scalars['String']['output'];
  /** Prénom  */
  uti_prenom: Scalars['String']['output'];
  /** Identifiant connexion 	 */
  uti_pseudo: Scalars['String']['output'];
  /** Reconnecter automatiquement l'utilisateur 	 */
  uti_reconnection_auto: Maybe<Scalars['Boolean']['output']>;
  /** Utilisateur super administrateur (si true) (non utilisé dans le portail)			 */
  uti_superadmin: Scalars['Boolean']['output'];
};

export type UserMinimalInfos = {
  __typename: 'UserMinimalInfos';
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
  prenom: Scalars['String']['output'];
};

/** Utilisateur */
export type Uti = {
  __typename: 'Uti';
  /**
   * #Do not exists in Uti
   *     accès dossier de l'utilisateur
   */
  acds: Maybe<Array<Acd>>;
  id: Scalars['ID']['output'];
  /** Périmètre */
  pdos_id: Scalars['Int']['output'];
  /** Fiche individu(le cas échéant) */
  sal_id: Maybe<Scalars['Int']['output']>;
  /** Accès au menu Gestion interne */
  uti_access_gestion_interne: Scalars['Boolean']['output'];
  uti_access_kpis: Scalars['Boolean']['output'];
  /** Accès aux paramètres du dossier de paie */
  uti_access_param_dossier: Scalars['Boolean']['output'];
  /** Accès aux paramètres généraux */
  uti_access_param_generaux: Scalars['Boolean']['output'];
  /** Accès au menu Mon portefeuille */
  uti_access_portefeuille: Scalars['Boolean']['output'];
  /** Accès aux tickets R & D du dossier courant */
  uti_access_tickets_dev: Scalars['Boolean']['output'];
  /** Accès au tableau de bord Paie */
  uti_access_to_business_dashboard: Scalars['Boolean']['output'];
  uti_access_to_cto_dashboard: Scalars['Boolean']['output'];
  /** Date début accès */
  uti_date_debut_acces: Maybe<Scalars['Date']['output']>;
  /** Date fin accès */
  uti_date_fin_acces: Maybe<Scalars['Date']['output']>;
  uti_display_image_profil: Scalars['Boolean']['output'];
  /** Email */
  uti_email: Maybe<Scalars['String']['output']>;
  uti_id: Scalars['Int']['output'];
  uti_last_pwd_manual_change: Maybe<Scalars['DateTime']['output']>;
  uti_last_pwd_regenerate: Maybe<Scalars['DateTime']['output']>;
  /** Nom */
  uti_nom: Scalars['String']['output'];
  /** Prénom */
  uti_prenom: Scalars['String']['output'];
  /** Identifiant connexion */
  uti_pseudo: Scalars['String']['output'];
  uti_pwd_encrypted: Maybe<Scalars['String']['output']>;
  /** Reconnecter automatiquement l'utilisateur  */
  uti_reconnection_auto: Scalars['Boolean']['output'];
  uti_superadmin: Scalars['Boolean']['output'];
};

export type UtiHandlerInCdc = {
  __typename: 'UtiHandlerInCdc';
  id: Scalars['ID']['output'];
  uti_nom: Scalars['String']['output'];
  uti_prenom: Scalars['String']['output'];
};

/** On get les infos par l'utiId directement ou le salId affilié si utiId pas disponible */
export type UtiInfosParams = {
  salId?: InputMaybe<Scalars['Int']['input']>;
  utiId?: InputMaybe<Scalars['Int']['input']>;
};

export type ValidateBicAndIbanResult = {
  __typename: 'ValidateBicAndIbanResult';
  isBicValid: Scalars['Boolean']['output'];
  isIbanValid: Scalars['Boolean']['output'];
};

export type Var = {
  __typename: 'Var';
  acrd_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  nvar_id: Maybe<Scalars['Int']['output']>;
  stvar_id: Maybe<Scalars['Int']['output']>;
  tdo_id: Maybe<Scalars['Int']['output']>;
  tvar_id: Scalars['Int']['output'];
  var_cal_arrondi: Maybe<Scalars['Int']['output']>;
  var_cal_template: Maybe<Scalars['String']['output']>;
  var_code: Scalars['String']['output'];
  var_explications_esp_emp: Maybe<Scalars['String']['output']>;
  var_id: Scalars['Int']['output'];
  var_lib: Scalars['String']['output'];
  var_lib_saisie_valeur: Maybe<Scalars['String']['output']>;
  var_niv_acrd_ccn: Scalars['Boolean']['output'];
  var_niv_aut_catc: Maybe<Scalars['Boolean']['output']>;
  var_niv_aut_crg: Maybe<Scalars['Boolean']['output']>;
  var_niv_aut_emp: Maybe<Scalars['Boolean']['output']>;
  var_niv_aut_eta: Scalars['Boolean']['output'];
  var_niv_autres: Maybe<Scalars['Boolean']['output']>;
  var_niv_cnt: Scalars['Boolean']['output'];
  var_niv_emploi: Scalars['Boolean']['output'];
  var_niv_euti: Scalars['Boolean']['output'];
  var_niv_national: Scalars['Boolean']['output'];
  var_niv_pad: Scalars['Boolean']['output'];
  var_niv_per: Scalars['Boolean']['output'];
  var_niv_sal: Scalars['Boolean']['output'];
  var_notes: Maybe<Scalars['String']['output']>;
  var_remontee_brut_var_id_cible: Maybe<Scalars['Int']['output']>;
  var_suffixe_saisie_valeur: Maybe<Scalars['String']['output']>;
  var_type_remontee_net_au_brut: Scalars['Int']['output'];
  var_typeliendospay: Scalars['Int']['output'];
  var_unite: Maybe<Scalars['Int']['output']>;
};

export type VariablesEmployeur = {
  __typename: 'VariablesEmployeur';
  mvars: Array<Mvar>;
  stvars: Array<Stvar>;
};

export type Vcal = {
  __typename: 'Vcal';
  /**
   * # Do not exists in Vcal
   * La demande de validation des calendriers qui émane du gestionnaire
   */
  dvc: Maybe<Dvc>;
  dvc_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  vcal_comment: Maybe<Scalars['String']['output']>;
  vcal_id: Scalars['Int']['output'];
  vcal_peri: Scalars['Int']['output'];
  vcal_status: Scalars['Int']['output'];
  vcal_timestamp_last_status_change: Maybe<Scalars['DateTime']['output']>;
};

export type Vcp = {
  __typename: 'Vcp';
  cprev_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  vcp_datedebut: Scalars['Date']['output'];
  vcp_datefin: Maybe<Scalars['Date']['output']>;
  vcp_id: Scalars['Int']['output'];
  vcp_peridebut: Scalars['Int']['output'];
  vcp_perifin: Maybe<Scalars['Int']['output']>;
  vcp_unit: Scalars['Int']['output'];
  vcp_valeur: Scalars['Float']['output'];
};

export type Vliv = {
  __typename: 'Vliv';
  id: Scalars['ID']['output'];
  liv_id: Scalars['Int']['output'];
  vliv_comment: Maybe<Scalars['String']['output']>;
  vliv_datetime: Scalars['DateTime']['output'];
  vliv_id: Scalars['Int']['output'];
  vliv_resultat: Scalars['Int']['output'];
  vliv_uti_id: Scalars['Int']['output'];
};

export type Vme = {
  __typename: 'Vme';
  docs: Maybe<Array<Document>>;
  esal: Maybe<Esal>;
  esal_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  ncnt_lib: Maybe<Scalars['String']['output']>;
  org_id: Maybe<Scalars['Int']['output']>;
  sal: Maybe<Sal>;
  sal_id: Maybe<Scalars['Int']['output']>;
  /** #Do not exists in vme */
  statut_desc: Maybe<Scalars['String']['output']>;
  tvme_id: Scalars['Int']['output'];
  tvme_lib: Maybe<Scalars['String']['output']>;
  vme_attestation_vip_statut: Maybe<Scalars['Int']['output']>;
  vme_date: Maybe<Scalars['Date']['output']>;
  vme_id: Scalars['Int']['output'];
  vme_notes: Maybe<Scalars['String']['output']>;
  vme_resultat_aptitude: Maybe<Scalars['Int']['output']>;
  vme_statut: Scalars['Int']['output'];
  vme_type_motif_reprise: Maybe<Scalars['Int']['output']>;
};

export type Vts = {
  __typename: 'Vts';
  id: Scalars['ID']['output'];
  tsh_id: Scalars['Int']['output'];
  vts_datetime: Scalars['DateTime']['output'];
  vts_endorser_uti_id: Scalars['Int']['output'];
  vts_id: Scalars['Int']['output'];
  vts_type: Scalars['Int']['output'];
};

/** Valeur variable de paie */
export type Vva = {
  __typename: 'Vva';
  /** identifiant de de rattachement au règlementaire */
  acrd_id: Maybe<Scalars['Int']['output']>;
  /** identifiant du contrat */
  cnt_id: Maybe<Scalars['Int']['output']>;
  /** identifiant de l'emploi */
  emp_id: Maybe<Scalars['Int']['output']>;
  /** entreprise utilisatrice */
  euti_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** identifiant du lot de valeurs */
  lvva_id: Maybe<Scalars['Int']['output']>;
  peria_id: Maybe<Scalars['Int']['output']>;
  sal_desc: Maybe<Scalars['String']['output']>;
  /** identifiant du salarié */
  sal_id: Maybe<Scalars['Int']['output']>;
  sal_matricule: Maybe<Scalars['String']['output']>;
  /** identifiant de de rattachement au texte */
  tacc_id: Maybe<Scalars['Int']['output']>;
  /** Do not exist in Vva */
  var: Maybe<Var>;
  /** identifiant du type de variable */
  var_id: Scalars['Int']['output'];
  /** Commentaire associée à la valeur de la variable */
  vva_comm: Maybe<Scalars['String']['output']>;
  /** Date de début associée à la valeur de la variable */
  vva_datedebut: Scalars['Date']['output'];
  /** Date de fin associée à la valeur de la variable */
  vva_datefin: Maybe<Scalars['Date']['output']>;
  vva_id: Scalars['Int']['output'];
  /** identifiant externe */
  vva_id_externe: Maybe<Scalars['String']['output']>;
  /**
   * NATIONAL: 1
   * DOSSIER: 2
   * CONTRAT: 3 // Variable contractuelle récurrente (tous les mois)
   * AUTRES: 4, // CRG, CATC, EMP, ETA ou combinaison
   *     CCN: 5
   * PERIODIQUE: 6 // Variable pour une période seulement
   * SALARIE: 7,
   *     ENT_UTIL: 8,
   *         EMPLOI: 9
   */
  vva_niveau: Scalars['Int']['output'];
  /** Période de début d'application de la valeur de la variable */
  vva_periodedebut: Maybe<Scalars['Int']['output']>;
  /** Période de fin d'application de la valeur de la variable */
  vva_periodefin: Maybe<Scalars['Int']['output']>;
  /** Id du motif de régularisation */
  vva_regul_motif: Maybe<Scalars['Int']['output']>;
  /** obsolete */
  vva_type_peri: Scalars['Int']['output'];
  /** Valeur de la variable */
  vva_valeur: Scalars['String']['output'];
};

/** Workflow - demande d'un salarié */
export type Wdm = {
  __typename: 'Wdm';
  docs: Maybe<Array<Document>>;
  esai_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** Dossier de paie dans lequel est créée cette demande */
  pad_id: Maybe<Scalars['Int']['output']>;
  runned_steps: Maybe<Array<Scalars['JSON']['output']>>;
  sal: Maybe<Sal>;
  steps: Maybe<Array<Scalars['JSON']['output']>>;
  /** Id du demandeur */
  uti_id_demandeur: Maybe<Scalars['Int']['output']>;
  /** Date heure de la bascule en paie */
  wdm_bascule_datetime: Maybe<Scalars['String']['output']>;
  /** Id de l'utilisateur ayant basculé la demande en paie */
  wdm_bascule_uti_id: Maybe<Scalars['Int']['output']>;
  /** Commentaire du demandeur à l'attention du valideur */
  wdm_comment_demandeur: Maybe<Scalars['String']['output']>;
  /** Date et heure de création de la demande */
  wdm_creation_timestamp: Scalars['String']['output'];
  /** Contenu de la demande(dénormalisé, dépend du type de demande wft_id) */
  wdm_data: Maybe<Scalars['JSON']['output']>;
  /** Non utilisé à ce jour */
  wdm_forcage_infos: Maybe<Scalars['JSON']['output']>;
  /** Non utilisé à ce jour */
  wdm_forcage_validation: Maybe<Scalars['Boolean']['output']>;
  /** ID du workflow de demande */
  wdm_id: Scalars['Int']['output'];
  /** Obsolete */
  wdm_traitement_fin: Maybe<Scalars['String']['output']>;
  /**
   * La demande est automatiquement validée = 2
   * validé par dérogation = 3
   */
  wdm_type_derogation: Scalars['Int']['output'];
  /** Do not exists in Wdm */
  wfrs: Maybe<Array<Wfrs>>;
  /** Id du Statut de la demande(voir table wfs) */
  wfs_id: Scalars['Int']['output'];
  /** Type de workflow */
  wft_id: Scalars['Int']['output'];
};

export type WdmDataDemandeAbs = {
  __typename: 'WdmDataDemandeAbs';
  abs_datedebut: Scalars['String']['output'];
  abs_datedebut_commence_aprem: Scalars['Boolean']['output'];
  abs_datefin: Scalars['String']['output'];
  abs_datefin_finit_matin: Scalars['Boolean']['output'];
  absenceHeures: Scalars['Boolean']['output'];
  tab_desc: Scalars['String']['output'];
  tab_id: Scalars['Int']['output'];
};

export type WdmHandler = {
  __typename: 'WdmHandler';
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
  prenom: Scalars['String']['output'];
};

export type WflStep = {
  __typename: 'WflStep';
  uti_handler: WdmHandler;
  wflr: Wflr;
  wfls: Wfls;
  wfrs: Wfrs;
};

/** Rôle dans le Workflow */
export type Wflr = {
  __typename: 'Wflr';
  id: Scalars['ID']['output'];
  /** Id du rôle */
  wflr_id: Scalars['Int']['output'];
  /** Libellé du rôle du validateur du Worlflow */
  wflr_lib: Scalars['String']['output'];
};

/** Etape du workflow */
export type Wfls = {
  __typename: 'Wfls';
  id: Scalars['ID']['output'];
  /** Rôle */
  wflr_id: Scalars['Int']['output'];
  /** Peut rejeter la demande ? */
  wfls_can_reject: Scalars['Boolean']['output'];
  /** Peut demander des informations supplémentaires ? */
  wfls_can_request_infos: Scalars['Boolean']['output'];
  /** Peut valider la demande ? */
  wfls_can_validate: Scalars['Boolean']['output'];
  /** Id de l'étape du worflow */
  wfls_id: Scalars['Int']['output'];
  /** Ordre de l'étape  */
  wfls_rank: Maybe<Scalars['Int']['output']>;
  /** Workflow - process */
  wfp_id: Scalars['Int']['output'];
  /** Obsolete ? */
  wlfs_uti_id_designated: Maybe<Scalars['Int']['output']>;
};

export type Wfp = {
  __typename: 'Wfp';
  id: Scalars['ID']['output'];
  pad_id: Maybe<Scalars['Int']['output']>;
  pdos_id: Maybe<Scalars['Int']['output']>;
  wfp_acompte_pct: Maybe<Scalars['Int']['output']>;
  wfp_annul_email_handlers: Scalars['Boolean']['output'];
  wfp_autodump: Scalars['Boolean']['output'];
  wfp_expert_can_display_all_compteurs: Scalars['Boolean']['output'];
  wfp_expert_can_display_all_employee_planning: Scalars['Boolean']['output'];
  wfp_id: Scalars['Int']['output'];
  wfp_infos_demandeur: Maybe<Scalars['String']['output']>;
  wfp_nb_pj_max: Maybe<Scalars['Int']['output']>;
  wfp_nb_pj_min: Maybe<Scalars['Int']['output']>;
  wfp_notif_user_on_dump_msg: Maybe<Scalars['String']['output']>;
  wfp_should_notif_user_on_dump: Scalars['Boolean']['output'];
  wfp_type_activation: Scalars['Int']['output'];
  wft_id: Scalars['Int']['output'];
};

/** Workflow - Etape du worflow de validation */
export type Wfrs = {
  __typename: 'Wfrs';
  handler: Maybe<WdmHandler>;
  id: Scalars['ID']['output'];
  sal: Maybe<Sal>;
  /** Do not exists in Wfrs */
  wdm: Maybe<Wdm>;
  /** Id de la demande à valider */
  wdm_id: Scalars['Int']['output'];
  /** Etape du modèle de workflow */
  wfls_id: Maybe<Scalars['Int']['output']>;
  /** Workflow - process */
  wfp_id: Scalars['Int']['output'];
  /** Commentaire saisie dans l'étape actuelle */
  wfrs_comment: Maybe<Scalars['String']['output']>;
  /** Timestamp de création de l'étape actuelle */
  wfrs_created_timestamp: Scalars['String']['output'];
  /** Id de l'utilisateur en charge de la validation de l'étape */
  wfrs_handler_uti_id: Scalars['Int']['output'];
  /** Id de l'étape    */
  wfrs_id: Scalars['Int']['output'];
  /** date du dernier changement de statut de l'étape actuelle */
  wfrs_last_status_change: Scalars['String']['output'];
  /** Id du Statut de l'étape actuelle */
  wfrs_status: Maybe<Scalars['Int']['output']>;
};

/** Workflow - statut */
export type Wfs = {
  __typename: 'Wfs';
  id: Scalars['ID']['output'];
  /** ID du statut */
  wfs_id: Scalars['Int']['output'];
  /** Libellé du statut */
  wfs_lib: Scalars['String']['output'];
};

/** Type de Workflow */
export type Wft = {
  __typename: 'Wft';
  id: Scalars['ID']['output'];
  pad_id: Maybe<Scalars['Int']['output']>;
  /** Obsolète */
  wft_actif: Scalars['Boolean']['output'];
  /** Obsolète */
  wft_gerer_bascule_paie: Scalars['Boolean']['output'];
  /** ID du type de Workflow */
  wft_id: Scalars['Int']['output'];
  /** Libellé du type de Workflow */
  wft_lib: Scalars['String']['output'];
};

export type ZendeskRequest = {
  __typename: 'ZendeskRequest';
  created_at: Scalars['String']['output'];
  custom_field_mois: Maybe<Scalars['String']['output']>;
  custom_field_nature: Maybe<Scalars['String']['output']>;
  custom_field_pad_id: Maybe<Scalars['Int']['output']>;
  custom_field_salaries_concernes: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  priority: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum ZoneSpecifiqueJoursFeries {
  AlsaceMoselle = 'AlsaceMoselle',
  Guadeloupe = 'Guadeloupe',
  Guyane = 'Guyane',
  Martinique = 'Martinique',
  Mayotte = 'Mayotte',
  NouvelleCaledonie = 'NouvelleCaledonie',
  PolynesieFrancaise = 'PolynesieFrancaise',
  Reunion = 'Reunion',
  SaintMartin = 'SaintMartin',
  WallisEtFutuna = 'WallisEtFutuna'
}
