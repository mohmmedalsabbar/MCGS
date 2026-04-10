/* =========================================
   MCGS SARL - Website JavaScript
   ========================================= */

// --- Translations ---
const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'A Propos',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.methodology': 'Methodologie',
    'nav.equipment': 'Equipements',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',

    'hero.badge': 'Entrepreneur Certifie BAT2',
    'hero.title': 'Infrastructure, Construction et Solutions d\'Ingenierie Durable en Mauritanie depuis 2019',
    'hero.subtitle': 'Entrepreneur de confiance en travaux publics, hydraulique, energie solaire et services generaux. Projets conformes et de haute qualite.',
    'hero.cta1': 'Demander un Devis',
    'hero.cta2': 'WhatsApp',
    'hero.stat1': 'Annees d\'Experience',
    'hero.stat2': 'MRU Contrats Executes',
    'hero.stat3': 'Projets Gouvernementaux',
    'hero.stat4': 'Conformite Reglementaire',

    'about.tag': 'A Propos',
    'about.title': 'Entrepreneur Multi-Sectoriel en Mauritanie',
    'about.lead': 'MCGS SARL est un entrepreneur multi-sectoriel qui fournit des services d\'infrastructure et des solutions techniques conformes aux normes reglementaires mauritaniennes.',
    'about.text1': 'Fondee en 2019 a Nouakchott sous forme de SARL, notre entreprise intervient dans la construction de batiments et equipements publics, les travaux hydrauliques, l\'installation de systemes d\'energie solaire, et le commerce general d\'import-export.',
    'about.text2': 'Nous avons realise avec succes des projets pour des ministeres, agences publiques et organisations non gouvernementales a travers le pays, avec un engagement constant envers la qualite et la conformite.',
    'about.form': 'Forme Juridique',
    'about.founded': 'Date de Creation',
    'about.location': 'Siege Social',
    'about.classification': 'Classification BTP',
    'about.vheading': 'Nos Engagements',
    'about.v1title': 'Qualite',
    'about.v1desc': 'Execution conforme aux specifications techniques et normes en vigueur',
    'about.v2title': 'Innovation',
    'about.v2desc': 'Solutions techniques adaptees incluant energie solaire et methodes modernes',
    'about.v3title': 'Durabilite',
    'about.v3desc': 'Projets integrant des solutions eco-responsables et durables',

    'services.tag': 'Nos Services',
    'services.title': 'Capacites Techniques',
    'services.desc': 'Solutions d\'ingenierie et de construction multi-sectorielles',
    'services.s1title': 'Construction & Travaux Publics',
    'services.s1desc': 'Construction de batiments, ecoles, mosquees, centres educatifs et gares routieres selon les normes les plus strictes.',
    'services.s1tag': 'BAT2 Certifie',
    'services.s1c1': 'Structures en beton arme (batiments, ecoles, mosquees)',
    'services.s1c2': 'Infrastructures de transport (gares, parkings)',
    'services.s1c3': 'Dallage, coffrage et maconnerie specialisee',
    'services.s1c4': 'Conforme aux normes de classification BAT2',
    'services.s2title': 'Hydraulique & Eau',
    'services.s2desc': 'Construction de chateaux d\'eau, installation de reseaux de canalisations et systemes de pompage solaire.',
    'services.s2tag': 'Infrastructure',
    'services.s2c1': 'Construction de chateaux d\'eau (20-30 m3+)',
    'services.s2c2': 'Pose de conduites PEHD (capacite 3000m+)',
    'services.s2c3': 'Hybridation et raccordement de forages',
    'services.s2c4': 'Systemes de pompage solaire',
    'services.s3title': 'Import-Export',
    'services.s3desc': 'Commerce general d\'importation et d\'exportation couvrant une large gamme de produits et materiaux.',
    'services.s3tag': 'International',
    'services.s3c1': 'Approvisionnement en materiaux de construction',
    'services.s3c2': 'Importation d\'equipements et fournitures techniques',
    'services.s3c3': 'Commerce general de produits et materiaux',
    'services.s4title': 'Energie Solaire',
    'services.s4desc': 'Installation de pompes solaires et solutions d\'energie propre pour un developpement durable.',
    'services.s4tag': 'Renouvelable',
    'services.s4c1': 'Installation de systemes de pompage solaire',
    'services.s4c2': 'Solutions hors-reseau pour zones rurales',
    'services.s4c3': 'Groupes electrogenes et alimentation de chantier',
    'services.s5title': 'Amenagement & Agriculture',
    'services.s5desc': 'Amenagement de terres agricoles avec techniques modernes incluant clotures et brise-vent.',
    'services.s5tag': 'Environnement',
    'services.s5c1': 'Installation de clotures et brise-vent',
    'services.s5c2': 'Amenagement de sites environnementaux',
    'services.s5c3': 'Travaux de terrassement et preparation de terrain',
    'services.s6title': 'Prestation de Services',
    'services.s6desc': 'Services diversifies adaptes aux besoins de nos clients, avec une equipe qualifiee et experimentee.',
    'services.s6tag': 'Sur Mesure',
    'services.s6c1': 'Genie civil, electricite et plomberie',
    'services.s6c2': 'Topographie et etudes techniques',
    'services.s6c3': 'Equipes pluridisciplinaires mobilisables',

    'projects.tag': 'Portfolio',
    'projects.title': 'Etudes de Cas',
    'projects.desc': 'Projets executes, certifies et livres avec attestations de bonne execution',
    'projects.nav1': 'Gare Routiere',
    'projects.nav2': 'Mosquee',
    'projects.nav3': 'Grande Muraille',
    'projects.nav4': 'Chateau d\'Eau',
    'projects.completed': 'Termine & Certifie',
    'projects.certified': 'Certifie',
    'projects.client': 'Client',
    'projects.location': 'Localisation',
    'projects.duration': 'Duree',
    'projects.mode': 'Attribution',
    'projects.funding': 'Financement',
    'projects.scope': 'Etendue des Travaux',
    'projects.deliverables': 'Livrables Cles',
    'projects.result': 'Resultat',
    'projects.p1title': 'Gare Routiere - Axe Nouakchott-Nouadhibou',
    'projects.p1desc': 'Construction d\'une gare routiere complete incluant parking en beton arme et reservoir d\'eau de 20m3. Marche attribue par le Ministere de l\'Equipement et des Transports.',
    'projects.p1client': 'Min. de l\'Equipement et des Transports',
    'projects.p1duration': '10 mois (8 + avenant 2 mois)',
    'projects.p1mode': 'Appel d\'Offres National',
    'projects.p1scope': 'Construction complete d\'une gare routiere sur l\'axe Nouakchott-Nouadhibou, incluant batiments, amenagements et infrastructures connexes.',
    'projects.p1d1': 'Construction de la gare routiere et batiments annexes',
    'projects.p1d2': 'Dallage en beton arme Ep. 8cm pour le parking',
    'projects.p1d3': 'Reserve d\'eau en beton arme de 20m3',
    'projects.p1result': 'Projet livre et certifie par l\'AROTR. Attestation d\'execution delivree. Avenant accorde pour travaux complementaires (+18.8%).',
    'projects.p2title': 'Mosquee Abdallah Hassan Al-Shihabi',
    'projects.p2desc': 'Construction complete d\'une mosquee sur 10 mois, realisee conformement aux specifications requises.',
    'projects.p2value': 'Certifie',
    'projects.p2client': 'Assoc. El YedOlya',
    'projects.p2scope': 'Construction integrale d\'une mosquee selon les specifications architecturales et techniques requises.',
    'projects.p2result': 'Travaux realises conformement aux specifications. Attestation de bonne execution delivree.',
    'projects.p3title': 'Clotures & Brise-Vent - Grande Muraille Verte',
    'projects.p3desc': 'Pose de clotures et brise-vent pour les sites de Guerou (Assaba) et Dwirara (Hodh El Gharbi). Projet environnemental national.',
    'projects.p3client': 'ANGMV - Min. Environnement',
    'projects.p3scope': 'Pose de clotures et brise-vent pour les sites de Guerou (Wilaya de l\'Assaba) et Dwirara (Wilaya du Hodh El Gharbi) dans le cadre du programme national de la Grande Muraille Verte.',
    'projects.p3result': 'Contrat execute avec satisfaction en 45 jours. Attestation de bonne execution delivree par le Directeur General de l\'ANGMV.',
    'projects.p3funding': 'Subvention de l\'Etat',
    'projects.p4title': 'Chateau d\'Eau & Raccordement - Region Assaba',
    'projects.p4desc': 'Reconstruction d\'un chateau d\'eau de 30m3, hybridation et raccordement de forage. Installation de 3000ml de conduite PEHD et groupe electrogene 30KVA.',
    'projects.p4client': 'Min. de l\'Hydraulique et de l\'Assainissement',
    'projects.p4scope': 'Reconstruction d\'un chateau d\'eau et hybridation/raccordement d\'un forage au chateau d\'eau existant dans la Wilaya de l\'Assaba.',
    'projects.p4d1': 'Chateau d\'eau de 30m3 a 12m de hauteur',
    'projects.p4d2': '3 000 ml de conduite PEHD diametre 63 PN10',
    'projects.p4d3': 'Groupe electrogene de 30 KVA installe',
    'projects.p4result': 'Attestation de bonne fin delivree par la Direction de l\'Hydraulique.',
    'projects.p4funding': 'Budget de l\'Etat',
    'projects.months': 'mois',
    'projects.days': 'jours',

    'method.tag': 'Notre Approche',
    'method.title': 'Methodologie de Travail',
    'method.desc': 'Un processus structure pour garantir la qualite et le respect des delais',
    'method.s1title': 'Evaluation',
    'method.s1desc': 'Analyse des besoins, etude du site et evaluation des contraintes techniques',
    'method.s2title': 'Planification',
    'method.s2desc': 'Elaboration des plans d\'execution, planning et budget detaille',
    'method.s3title': 'Mobilisation',
    'method.s3desc': 'Deploiement des equipes, equipements et materiaux sur site',
    'method.s4title': 'Execution',
    'method.s4desc': 'Realisation des travaux selon les specifications et le planning etabli',
    'method.s5title': 'Controle Qualite',
    'method.s5desc': 'Verification continue de la conformite et suivi des normes techniques',
    'method.s6title': 'Livraison',
    'method.s6desc': 'Remise du projet au client avec documentation et attestations',

    'partners.tag': 'Nos Clients',
    'partners.title': 'Types de Clients & Partenaires',
    'partners.desc': 'Partenaire local ideal pour les institutions publiques et les entreprises internationales souhaitant operer en Mauritanie',
    'partners.p1': 'Ministeres Gouvernementaux',
    'partners.p1desc': 'Equipement, Hydraulique, Environnement, Habitat',
    'partners.p2': 'Agences Publiques',
    'partners.p2desc': 'AROTR, ANGMV et autres etablissements publics',
    'partners.p3': 'ONG & Associations',
    'partners.p3desc': 'Organisations caritatives et associations locales',
    'partners.p4': 'Secteur Prive',
    'partners.p4desc': 'Entreprises nationales et internationales',

    'equipment.tag': 'Parc Materiel',
    'equipment.title': 'Nos Equipements',
    'equipment.desc': 'Un parc materiel complet, en propriete et en location, adapte a chaque projet',
    'equipment.catTransport': 'Transport & Vehicules',
    'equipment.catTransportDesc': 'Vehicules de liaison, camions bennes, vehicules de transport pour le personnel et les materiaux',
    'equipment.t1': 'Vehicules 4x4 tout-terrain',
    'equipment.t2': 'Camions bennes multi-tonnages',
    'equipment.t3': 'Vehicules de transport de personnel',
    'equipment.catConstruction': 'Construction & Compactage',
    'equipment.catConstructionDesc': 'Equipements de betonnage, compactage et vibration pour les travaux de genie civil',
    'equipment.c1': 'Betonnieres industrielles',
    'equipment.c2': 'Compacteurs et plaques vibrantes',
    'equipment.c3': 'Rouleaux compresseurs',
    'equipment.c4': 'Vibrateurs a beton',
    'equipment.catEnergy': 'Energie & Outillage',
    'equipment.catEnergyDesc': 'Groupes electrogenes, outillage specialise pour les travaux electriques, plomberie et genie civil',
    'equipment.e1': 'Groupes electrogenes de chantier',
    'equipment.e2': 'Outillage electrique et plomberie',
    'equipment.e3': 'Materiel de soudure et decoupe',
    'equipment.catHydraulic': 'Hydraulique & Forage',
    'equipment.catHydraulicDesc': 'Materiel pour les travaux d\'adduction d\'eau, forage et installations hydrauliques',
    'equipment.h1': 'Pompes hydrauliques',
    'equipment.h2': 'Equipements de forage',
    'equipment.h3': 'Materiel de canalisation',
    'equipment.note': 'Materiel disponible en propriete et en location selon les besoins du projet. Capacite d\'acquisition supplementaire sur demande.',

    'cert.tag': 'Conformite',
    'cert.title': 'Certifications & Agrement',
    'cert.desc': 'Pleinement conforme aux exigences legales et reglementaires mauritaniennes',
    'cert.c1title': 'Certificat BTP',
    'cert.c1desc': 'Classification BAT2 - Batiment et Equipements Publics',
    'cert.c1issuer': 'Ministere de l\'Habitat et de l\'Urbanisme',
    'cert.c1valid': 'Valide jusqu\'en Mai 2028',
    'cert.active': 'Actif',
    'cert.c2title': 'Regularite Fiscale',
    'cert.c2desc': 'Attestation DGI - Direction Generale des Impots',
    'cert.c2issuer': 'Direction Generale des Impots',
    'cert.c2date': 'Attestation a jour',
    'cert.compliant': 'En Regle',
    'cert.c3title': 'Attestation CNSS',
    'cert.c3desc': 'Caisse Nationale de Securite Sociale - Aucune cotisation impayee',
    'cert.c3issuer': 'Caisse Nationale de Securite Sociale',
    'cert.c3date': 'Aucune cotisation impayee',
    'cert.uptodate': 'A Jour',
    'cert.c4title': 'Registre du Commerce',
    'cert.c4desc': 'Enregistrement commercial et identification fiscale',
    'cert.c4issuer': 'Registre du Commerce - Nouakchott',
    'cert.c4date': 'Enregistre depuis 2019',
    'cert.registered': 'Enregistre',

    'team.tag': 'Notre Equipe',
    'team.title': 'Structure Organisationnelle',
    'team.desc': 'Une equipe pluridisciplinaire qualifiee et experimentee',
    'team.director': 'Directeur General',
    'team.management': 'Direction & Encadrement',
    'team.trades': 'Corps de Metiers',
    'team.support': 'Support & Logistique',
    'team.t1': 'Ingenieur en Genie Civil - Directeur des Travaux',
    'team.t2': 'Technicien Superieur en Genie Civil - Conducteur de Travaux',
    'team.t3': 'Chef de Chantier en Genie Civil',
    'team.t4': 'Technicien Superieur en Topographie',
    'team.t5': 'Technicien Superieur en Plomberie',
    'team.t6': 'Ouvriers specialises en Maconnerie et Structure',
    'team.t7': 'Equipe d\'ouvriers qualifies et manoeuvres',
    'team.t8': 'Gardiens, pointeurs, chauffeurs, mecaniciens',
    'team.tr1': 'Macons',
    'team.tr2': 'Ferrailleurs',
    'team.tr3': 'Menuisiers',
    'team.tr4': 'Plombiers',
    'team.tr5': 'Coffreurs',
    'team.tr6': 'Peintres',
    'team.tr7': 'Electriciens',
    'team.tr8': 'Carreleurs',
    'team.tr9': 'Terrassiers',

    'contact.tag': 'Contact',
    'contact.title': 'Demander un Devis',
    'contact.desc': 'Reponse sous 24 heures. Contactez-nous pour toute demande de devis, renseignement ou partenariat.',
    'contact.trust': 'Reponse garantie sous 24 heures',
    'contact.address': 'Adresse',
    'contact.phone': 'Telephone',
    'contact.hours': 'Horaires',
    'contact.hoursText': 'Lundi - Vendredi: 8h00 - 17h00',
    'contact.waTitle': 'Reponse Rapide via WhatsApp',
    'contact.waDesc': 'Ecrivez-nous directement, nous repondons en quelques minutes.',
    'contact.waBtn': 'Ouvrir WhatsApp',
    'contact.or': 'ou envoyez un message',
    'contact.phName': 'Nom',
    'contact.phPhone': 'Telephone (WhatsApp de preference)',
    'contact.phSubject': 'Sujet',
    'contact.optQuote': 'Demande de Devis',
    'contact.opt1': 'Partenariat',
    'contact.opt2': 'Projet',
    'contact.opt3': 'Demande de Service',
    'contact.opt4': 'Autre',
    'contact.phMessage': 'Votre message...',
    'contact.send': 'Envoyer',

    'faq.title': 'Questions Frequentes',
    'faq.desc': 'Trouvez les reponses aux questions les plus courantes',
    'faq.q1': 'Quels types de projets MCGS SARL realise-t-elle?',
    'faq.a1': 'MCGS SARL realise des projets de construction de batiments (ecoles, mosquees, gares routieres), des travaux hydrauliques (chateaux d\'eau, reseaux de canalisations), des projets environnementaux (clotures, brise-vent pour la Grande Muraille Verte), ainsi que des services d\'import-export et d\'installation d\'energie solaire.',
    'faq.q2': 'Quelle est la classification BTP de MCGS SARL?',
    'faq.a2': 'MCGS SARL detient la classification BAT2 pour les activites de Batiment et Equipements Publics, certifiee par le Ministere de l\'Habitat, de l\'Urbanisme et de l\'Amenagement du Territoire. Ce certificat est valide jusqu\'en Mai 2028.',
    'faq.q3': 'MCGS SARL est-elle en regle fiscalement et socialement?',
    'faq.a3': 'Oui, MCGS SARL est pleinement conforme. L\'attestation de regularite fiscale est a jour aupres de la Direction Generale des Impots. L\'attestation CNSS confirme qu\'aucune cotisation n\'est impayee.',
    'faq.q4': 'Comment devenir partenaire de MCGS SARL?',
    'faq.a4': 'MCGS SARL accueille favorablement les partenariats pour etendre ses capacites et offrir des solutions innovantes et integrees. Nous sommes le partenaire local ideal pour les entreprises internationales souhaitant entrer sur le marche mauritanien. Contactez-nous via notre formulaire ou par telephone.',
    'faq.q5': 'Quelles zones geographiques MCGS SARL couvre-t-elle?',
    'faq.a5': 'Basee a Nouakchott (KSAR), MCGS SARL opere a travers toute la Mauritanie, incluant les regions de l\'Assaba, du Hodh El Gharbi, et l\'axe Nouakchott-Nouadhibou.',
    'faq.q6': 'Quel est le parc materiel disponible?',
    'faq.a6': 'MCGS SARL dispose de plus de 10 equipements incluant des vehicules Toyota Hilux, un camion benne Mercedes, des betonnieres, des compacteurs, des groupes electrogenes Honda, des vibrateurs a beton, et des lots complets de materiels pour le genie civil, l\'electricite et la plomberie.',

    'footer.desc': 'Entrepreneur multi-sectoriel en construction, hydraulique, energie solaire et commerce general en Mauritanie.',
    'footer.quicklinks': 'Navigation',
    'footer.services': 'Secteurs',
    'footer.rights': 'Tous droits reserves.',
    'footer.legal': 'KSAR, Nouakchott, Mauritanie'
  },

  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.methodology': 'Methodology',
    'nav.equipment': 'Equipment',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',

    'hero.badge': 'BAT2 Certified Contractor',
    'hero.title': 'Delivering Infrastructure, Construction and Sustainable Engineering Solutions Across Mauritania Since 2019',
    'hero.subtitle': 'Trusted contractor in public works, hydraulics, solar energy and general services. Compliant and high-quality project delivery.',
    'hero.cta1': 'Request a Quote',
    'hero.cta2': 'WhatsApp',
    'hero.stat1': 'Years of Experience',
    'hero.stat2': 'MRU Contracts Delivered',
    'hero.stat3': 'Government Projects',
    'hero.stat4': 'Regulatory Compliance',

    'about.tag': 'About Us',
    'about.title': 'Multi-Sector Contractor in Mauritania',
    'about.lead': 'MCGS SARL is a multi-sector contractor delivering infrastructure services and technical solutions aligned with Mauritanian regulatory standards.',
    'about.text1': 'Founded in 2019 in Nouakchott as a limited liability company, we operate in public building construction, hydraulic infrastructure, solar energy systems, and general import-export trade.',
    'about.text2': 'We have successfully delivered projects for government ministries, public agencies, and NGOs across the country, with a consistent commitment to quality and compliance.',
    'about.form': 'Legal Form',
    'about.founded': 'Date of Creation',
    'about.location': 'Headquarters',
    'about.classification': 'BTP Classification',
    'about.vheading': 'Our Commitments',
    'about.v1title': 'Quality',
    'about.v1desc': 'Execution compliant with technical specifications and current standards',
    'about.v2title': 'Innovation',
    'about.v2desc': 'Adapted technical solutions including solar energy and modern methods',
    'about.v3title': 'Sustainability',
    'about.v3desc': 'Projects incorporating eco-friendly and sustainable solutions',

    'services.tag': 'Our Services',
    'services.title': 'Technical Capabilities',
    'services.desc': 'Multi-sector engineering and construction solutions',
    'services.s1title': 'Construction & Public Works',
    'services.s1desc': 'Construction of buildings, schools, mosques, educational centers and bus stations to the highest standards.',
    'services.s1tag': 'BAT2 Certified',
    'services.s1c1': 'Reinforced concrete structures (buildings, schools, mosques)',
    'services.s1c2': 'Transport infrastructure (stations, parking areas)',
    'services.s1c3': 'Paving, formwork and specialized masonry',
    'services.s1c4': 'Compliant with BAT2 classification standards',
    'services.s2title': 'Hydraulics & Water',
    'services.s2desc': 'Construction of water towers, installation of pipeline networks and solar pumping systems.',
    'services.s2tag': 'Infrastructure',
    'services.s2c1': 'Water tower construction (20-30 m\u00b3+)',
    'services.s2c2': 'HDPE pipeline installation (3000m+ capacity)',
    'services.s2c3': 'Borehole hybridization and connection',
    'services.s2c4': 'Solar pumping systems',
    'services.s3title': 'Import-Export',
    'services.s3desc': 'General import and export trade covering a wide range of products and materials.',
    'services.s3tag': 'International',
    'services.s3c1': 'Construction materials procurement',
    'services.s3c2': 'Technical equipment and supplies import',
    'services.s3c3': 'General trade of products and materials',
    'services.s4title': 'Solar Energy',
    'services.s4desc': 'Installation of solar pumps and clean energy solutions for sustainable development.',
    'services.s4tag': 'Renewable',
    'services.s4c1': 'Solar pumping system installation',
    'services.s4c2': 'Off-grid solutions for rural areas',
    'services.s4c3': 'Generators and site power supply',
    'services.s5title': 'Land Development & Agriculture',
    'services.s5desc': 'Agricultural land development with modern techniques including fencing and windbreaks.',
    'services.s5tag': 'Environment',
    'services.s5c1': 'Fencing and windbreak installation',
    'services.s5c2': 'Environmental site development',
    'services.s5c3': 'Earthworks and land preparation',
    'services.s6title': 'Service Delivery',
    'services.s6desc': 'Diversified services tailored to client needs, with a qualified and experienced team.',
    'services.s6tag': 'Custom',
    'services.s6c1': 'Civil engineering, electrical and plumbing',
    'services.s6c2': 'Surveying and technical studies',
    'services.s6c3': 'Deployable multidisciplinary teams',

    'projects.tag': 'Portfolio',
    'projects.title': 'Case Studies',
    'projects.desc': 'Projects executed, certified, and delivered with completion certificates',
    'projects.nav1': 'Bus Station',
    'projects.nav2': 'Mosque',
    'projects.nav3': 'Great Green Wall',
    'projects.nav4': 'Water Tower',
    'projects.completed': 'Completed & Certified',
    'projects.certified': 'Certified',
    'projects.client': 'Client',
    'projects.location': 'Location',
    'projects.duration': 'Duration',
    'projects.mode': 'Award Method',
    'projects.funding': 'Funding',
    'projects.scope': 'Scope of Work',
    'projects.deliverables': 'Key Deliverables',
    'projects.result': 'Result',
    'projects.p1title': 'Bus Station - Nouakchott-Nouadhibou Route',
    'projects.p1desc': 'Construction of a complete bus station including reinforced concrete parking and 20m3 water tank. Contract awarded by the Ministry of Equipment and Transport.',
    'projects.p1client': 'Ministry of Equipment and Transport',
    'projects.p1duration': '10 months (8 + 2-month amendment)',
    'projects.p1mode': 'National Competitive Bidding',
    'projects.p1scope': 'Complete construction of a bus station on the Nouakchott-Nouadhibou route, including buildings, facilities and related infrastructure.',
    'projects.p1d1': 'Bus station and annex buildings construction',
    'projects.p1d2': 'Reinforced concrete paving (8cm) for parking area',
    'projects.p1d3': '20m\u00b3 reinforced concrete water tank',
    'projects.p1result': 'Project delivered and certified by AROTR. Completion certificate issued. Amendment granted for additional works (+18.8%).',
    'projects.p2title': 'Abdallah Hassan Al-Shihabi Mosque',
    'projects.p2desc': 'Complete mosque construction over 10 months, carried out in accordance with required specifications.',
    'projects.p2value': 'Certified',
    'projects.p2client': 'El YedOlya Assoc.',
    'projects.p2scope': 'Complete mosque construction according to required architectural and technical specifications.',
    'projects.p2result': 'Works completed in accordance with specifications. Completion certificate issued.',
    'projects.p3title': 'Fencing & Windbreaks - Great Green Wall',
    'projects.p3desc': 'Installation of fencing and windbreaks for sites in Guerou (Assaba) and Dwirara (Hodh El Gharbi). National environmental project.',
    'projects.p3client': 'ANGMV - Min. of Environment',
    'projects.p3scope': 'Installation of fencing and windbreaks for Guerou (Assaba) and Dwirara (Hodh El Gharbi) sites under the national Great Green Wall program.',
    'projects.p3result': 'Contract executed satisfactorily in 45 days. Completion certificate issued by ANGMV Director General.',
    'projects.p3funding': 'Government Grant',
    'projects.p4title': 'Water Tower & Connection - Assaba Region',
    'projects.p4desc': 'Reconstruction of a 30m3 water tower, hybridization and borehole connection. Installation of 3000ml HDPE pipeline and 30KVA generator.',
    'projects.p4client': 'Ministry of Hydraulics and Sanitation',
    'projects.p4scope': 'Water tower reconstruction and borehole hybridization/connection to existing water tower in the Assaba Region.',
    'projects.p4d1': '30m\u00b3 water tower at 12m height',
    'projects.p4d2': '3,000 linear meters of HDPE pipe, diameter 63 PN10',
    'projects.p4d3': '30 KVA generator installed',
    'projects.p4result': 'Completion certificate issued by the Directorate of Hydraulics.',
    'projects.p4funding': 'State Budget',
    'projects.months': 'months',
    'projects.days': 'days',

    'method.tag': 'Our Approach',
    'method.title': 'Work Methodology',
    'method.desc': 'A structured process ensuring quality and timeline compliance',
    'method.s1title': 'Assessment',
    'method.s1desc': 'Needs analysis, site study, and technical constraint assessment',
    'method.s2title': 'Planning',
    'method.s2desc': 'Development of execution plans, scheduling, and detailed budgeting',
    'method.s3title': 'Mobilization',
    'method.s3desc': 'Deployment of teams, equipment, and materials to site',
    'method.s4title': 'Execution',
    'method.s4desc': 'Works execution according to specifications and established schedule',
    'method.s5title': 'Quality Control',
    'method.s5desc': 'Continuous compliance verification and technical standards monitoring',
    'method.s6title': 'Delivery',
    'method.s6desc': 'Project handover to client with documentation and certificates',

    'partners.tag': 'Our Clients',
    'partners.title': 'Client Types & Partners',
    'partners.desc': 'Ideal local partner for public institutions and international companies seeking to operate in Mauritania',
    'partners.p1': 'Government Ministries',
    'partners.p1desc': 'Equipment, Hydraulics, Environment, Housing',
    'partners.p2': 'Public Agencies',
    'partners.p2desc': 'AROTR, ANGMV and other public establishments',
    'partners.p3': 'NGOs & Associations',
    'partners.p3desc': 'Charitable organizations and local associations',
    'partners.p4': 'Private Sector',
    'partners.p4desc': 'National and international companies',

    'equipment.tag': 'Equipment Fleet',
    'equipment.title': 'Our Equipment',
    'equipment.desc': 'A comprehensive fleet of owned and rented equipment, tailored to each project',
    'equipment.catTransport': 'Transport & Vehicles',
    'equipment.catTransportDesc': 'Liaison vehicles, dump trucks, and personnel/material transport vehicles',
    'equipment.t1': 'All-terrain 4x4 vehicles',
    'equipment.t2': 'Multi-tonnage dump trucks',
    'equipment.t3': 'Personnel transport vehicles',
    'equipment.catConstruction': 'Construction & Compaction',
    'equipment.catConstructionDesc': 'Concrete mixing, compaction and vibration equipment for civil engineering works',
    'equipment.c1': 'Industrial concrete mixers',
    'equipment.c2': 'Compactors and vibrating plates',
    'equipment.c3': 'Road rollers',
    'equipment.c4': 'Concrete vibrators',
    'equipment.catEnergy': 'Energy & Tools',
    'equipment.catEnergyDesc': 'Generators and specialized tools for electrical, plumbing and civil works',
    'equipment.e1': 'Site generators',
    'equipment.e2': 'Electrical and plumbing tools',
    'equipment.e3': 'Welding and cutting equipment',
    'equipment.catHydraulic': 'Hydraulics & Drilling',
    'equipment.catHydraulicDesc': 'Equipment for water supply, drilling and hydraulic installations',
    'equipment.h1': 'Hydraulic pumps',
    'equipment.h2': 'Drilling equipment',
    'equipment.h3': 'Pipeline materials',
    'equipment.note': 'Equipment available as owned or rented based on project needs. Additional procurement capacity on request.',

    'cert.tag': 'Compliance',
    'cert.title': 'Certifications & Approvals',
    'cert.desc': 'Fully compliant with Mauritanian legal and regulatory requirements',
    'cert.c1title': 'BTP Certificate',
    'cert.c1desc': 'BAT2 Classification - Building and Public Equipment',
    'cert.c1issuer': 'Ministry of Housing and Urban Planning',
    'cert.c1valid': 'Valid until May 2028',
    'cert.active': 'Active',
    'cert.c2title': 'Tax Compliance',
    'cert.c2desc': 'DGI Certificate - General Directorate of Taxes',
    'cert.c2issuer': 'General Directorate of Taxes',
    'cert.c2date': 'Certificate up to date',
    'cert.compliant': 'Compliant',
    'cert.c3title': 'CNSS Certificate',
    'cert.c3desc': 'National Social Security Fund - No overdue contributions',
    'cert.c3issuer': 'National Social Security Fund',
    'cert.c3date': 'No overdue contributions',
    'cert.uptodate': 'Up to Date',
    'cert.c4title': 'Trade Register',
    'cert.c4desc': 'Commercial registration and tax identification',
    'cert.c4issuer': 'Trade Register - Nouakchott',
    'cert.c4date': 'Registered since 2019',
    'cert.registered': 'Registered',

    'team.tag': 'Our Team',
    'team.title': 'Organizational Structure',
    'team.desc': 'A qualified and experienced multidisciplinary team',
    'team.director': 'Director General',
    'team.management': 'Management & Supervision',
    'team.trades': 'Trade Teams',
    'team.support': 'Support & Logistics',
    'team.t1': 'Civil Engineer - Works Director',
    'team.t2': 'Senior Technician in Civil Engineering - Works Supervisor',
    'team.t3': 'Civil Engineering Site Manager',
    'team.t4': 'Senior Surveying Technician',
    'team.t5': 'Senior Plumbing Technician',
    'team.t6': 'Specialized Workers in Masonry and Structure',
    'team.t7': 'Qualified workers and laborers team',
    'team.t8': 'Guards, timekeepers, drivers, mechanics',
    'team.tr1': 'Masons',
    'team.tr2': 'Rebar Workers',
    'team.tr3': 'Carpenters',
    'team.tr4': 'Plumbers',
    'team.tr5': 'Formwork Specialists',
    'team.tr6': 'Painters',
    'team.tr7': 'Electricians',
    'team.tr8': 'Tile Setters',
    'team.tr9': 'Earthworkers',

    'contact.tag': 'Contact',
    'contact.title': 'Request a Quote',
    'contact.desc': 'Response within 24 hours. Contact us for quotes, information, or partnership inquiries.',
    'contact.trust': 'Guaranteed response within 24 hours',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.hours': 'Working Hours',
    'contact.hoursText': 'Monday - Friday: 8:00 AM - 5:00 PM',
    'contact.waTitle': 'Quick Response via WhatsApp',
    'contact.waDesc': 'Write to us directly, we respond in minutes.',
    'contact.waBtn': 'Open WhatsApp',
    'contact.or': 'or send a message',
    'contact.phName': 'Name',
    'contact.phPhone': 'Phone (WhatsApp preferred)',
    'contact.phSubject': 'Subject',
    'contact.optQuote': 'Quote Request',
    'contact.opt1': 'Partnership',
    'contact.opt2': 'Project',
    'contact.opt3': 'Service Request',
    'contact.opt4': 'Other',
    'contact.phMessage': 'Your message...',
    'contact.send': 'Send',

    'faq.title': 'Frequently Asked Questions',
    'faq.desc': 'Find answers to the most common questions',
    'faq.q1': 'What types of projects does MCGS SARL carry out?',
    'faq.a1': 'MCGS SARL carries out building construction projects (schools, mosques, bus stations), hydraulic works (water towers, pipeline networks), environmental projects (fencing, windbreaks for the Great Green Wall), as well as import-export and solar energy installation services.',
    'faq.q2': 'What is the BTP classification of MCGS SARL?',
    'faq.a2': 'MCGS SARL holds the BAT2 classification for Building and Public Equipment activities, certified by the Ministry of Housing, Urban Planning and Land Development. This certificate is valid until May 2028.',
    'faq.q3': 'Is MCGS SARL tax and social security compliant?',
    'faq.a3': 'Yes, MCGS SARL is fully compliant. The tax compliance certificate is up to date with the General Directorate of Taxes. The CNSS certificate confirms no overdue contributions.',
    'faq.q4': 'How to become a partner of MCGS SARL?',
    'faq.a4': 'MCGS SARL welcomes partnerships to expand capabilities and offer innovative, integrated solutions. We are the ideal local partner for international companies entering the Mauritanian market. Contact us through our form or by phone.',
    'faq.q5': 'Which geographical areas does MCGS SARL cover?',
    'faq.a5': 'Based in Nouakchott (KSAR), MCGS SARL operates across all of Mauritania, including the Assaba region, Hodh El Gharbi, and the Nouakchott-Nouadhibou axis.',
    'faq.q6': 'What equipment fleet is available?',
    'faq.a6': 'MCGS SARL has over 10 pieces of equipment including Toyota Hilux vehicles, a Mercedes dump truck, concrete mixers, compactors, Honda generators, concrete vibrators, and complete kits for civil engineering, electrical, and plumbing works.',

    'footer.desc': 'Multi-sector contractor in construction, hydraulics, solar energy and general trade in Mauritania.',
    'footer.quicklinks': 'Navigation',
    'footer.services': 'Sectors',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'KSAR, Nouakchott, Mauritania'
  },

  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.methodology': 'المنهجية',
    'nav.equipment': 'المعدات',
    'nav.certifications': 'الشهادات',
    'nav.contact': 'اتصل بنا',

    'hero.badge': 'مقاول معتمد BAT2',
    'hero.title': 'البنية التحتية والبناء وحلول الهندسة المستدامة في موريتانيا منذ 2019',
    'hero.subtitle': 'مقاول موثوق في الأشغال العمومية والهيدروليك والطاقة الشمسية والخدمات العامة. مشاريع متوافقة وعالية الجودة.',
    'hero.cta1': 'طلب عرض أسعار',
    'hero.cta2': 'WhatsApp',
    'hero.stat1': 'سنوات من الخبرة',
    'hero.stat2': 'أوقية عقود منفذة',
    'hero.stat3': 'مشاريع حكومية',
    'hero.stat4': 'الامتثال التنظيمي',

    'about.tag': 'من نحن',
    'about.title': 'مقاول متعدد القطاعات في موريتانيا',
    'about.lead': 'شركة MCGS SARL مقاول متعدد القطاعات يقدم خدمات البنية التحتية والحلول التقنية المتوافقة مع المعايير التنظيمية الموريتانية.',
    'about.text1': 'تأسست في 2019 بنواكشوط كشركة ذات مسؤولية محدودة، نعمل في بناء المباني العامة والبنية التحتية الهيدروليكية وأنظمة الطاقة الشمسية والتجارة العامة.',
    'about.text2': 'نفذنا بنجاح مشاريع لوزارات حكومية ووكالات عامة ومنظمات غير حكومية عبر البلاد، مع التزام دائم بالجودة والامتثال.',
    'about.form': 'الشكل القانوني',
    'about.founded': 'تاريخ التأسيس',
    'about.location': 'المقر الرئيسي',
    'about.classification': 'تصنيف البناء',
    'about.vheading': 'التزاماتنا',
    'about.v1title': 'الجودة',
    'about.v1desc': 'تنفيذ مطابق للمواصفات التقنية والمعايير المعمول بها',
    'about.v2title': 'الابتكار',
    'about.v2desc': 'حلول تقنية متكيفة تشمل الطاقة الشمسية والأساليب الحديثة',
    'about.v3title': 'الاستدامة',
    'about.v3desc': 'مشاريع تدمج حلولاً صديقة للبيئة ومستدامة',

    'services.tag': 'خدماتنا',
    'services.title': 'القدرات التقنية',
    'services.desc': 'حلول هندسية وإنشائية متعددة القطاعات',
    'services.s1title': 'البناء والأشغال العمومية',
    'services.s1desc': 'بناء المباني والمدارس والمساجد والمراكز التعليمية ومحطات النقل وفق أعلى المعايير.',
    'services.s1tag': 'معتمد BAT2',
    'services.s1c1': 'هياكل خرسانية مسلحة (مباني، مدارس، مساجد)',
    'services.s1c2': 'بنية تحتية للنقل (محطات، مواقف سيارات)',
    'services.s1c3': 'تبليط وقوالب وبناء متخصص',
    'services.s1c4': 'متوافق مع معايير تصنيف BAT2',
    'services.s2title': 'الهيدروليك والمياه',
    'services.s2desc': 'بناء خزانات المياه وتركيب شبكات الأنابيب وأنظمة الضخ بالطاقة الشمسية.',
    'services.s2tag': 'بنية تحتية',
    'services.s2c1': 'بناء خزانات مياه (20-30 م\u00b3+)',
    'services.s2c2': 'تركيب أنابيب PEHD (سعة 3000م+)',
    'services.s2c3': 'تهجين وربط الآبار',
    'services.s2c4': 'أنظمة الضخ بالطاقة الشمسية',
    'services.s3title': 'استيراد وتصدير',
    'services.s3desc': 'تجارة عامة للاستيراد والتصدير تغطي مجموعة واسعة من المنتجات والمواد.',
    'services.s3tag': 'دولي',
    'services.s3c1': 'توريد مواد البناء',
    'services.s3c2': 'استيراد المعدات واللوازم التقنية',
    'services.s3c3': 'تجارة عامة للمنتجات والمواد',
    'services.s4title': 'الطاقة الشمسية',
    'services.s4desc': 'تركيب مضخات شمسية وحلول طاقة نظيفة للتنمية المستدامة.',
    'services.s4tag': 'متجددة',
    'services.s4c1': 'تركيب أنظمة الضخ بالطاقة الشمسية',
    'services.s4c2': 'حلول خارج الشبكة للمناطق الريفية',
    'services.s4c3': 'مولدات كهربائية وتغذية مواقع العمل',
    'services.s5title': 'التهيئة والزراعة',
    'services.s5desc': 'تهيئة الأراضي الزراعية بتقنيات حديثة تشمل الأسوار ومصدات الرياح.',
    'services.s5tag': 'البيئة',
    'services.s5c1': 'تركيب أسوار ومصدات رياح',
    'services.s5c2': 'تهيئة المواقع البيئية',
    'services.s5c3': 'أعمال الحفر وتحضير الأراضي',
    'services.s6title': 'تقديم الخدمات',
    'services.s6desc': 'خدمات متنوعة مصممة حسب احتياجات عملائنا، بفريق مؤهل وذي خبرة.',
    'services.s6tag': 'حسب الطلب',
    'services.s6c1': 'هندسة مدنية وكهرباء وسباكة',
    'services.s6c2': 'مساحة ودراسات تقنية',
    'services.s6c3': 'فرق متعددة التخصصات قابلة للتعبئة',

    'projects.tag': 'أعمالنا',
    'projects.title': 'دراسات حالة',
    'projects.desc': 'مشاريع منفذة ومعتمدة ومسلمة بشهادات حسن التنفيذ',
    'projects.nav1': 'محطة الحافلات',
    'projects.nav2': 'المسجد',
    'projects.nav3': 'السور الأخضر',
    'projects.nav4': 'خزان المياه',
    'projects.completed': 'منجز ومعتمد',
    'projects.certified': 'معتمد',
    'projects.client': 'العميل',
    'projects.location': 'الموقع',
    'projects.duration': 'المدة',
    'projects.mode': 'طريقة الإسناد',
    'projects.funding': 'التمويل',
    'projects.scope': 'نطاق العمل',
    'projects.deliverables': 'المخرجات الرئيسية',
    'projects.result': 'النتيجة',
    'projects.p1title': 'محطة نقل - محور نواكشوط-نواذيبو',
    'projects.p1desc': 'بناء محطة نقل متكاملة تشمل موقف سيارات من الخرسانة المسلحة وخزان مياه بسعة 20 متر مكعب. عقد من وزارة التجهيز والنقل.',
    'projects.p1client': 'وزارة التجهيز والنقل',
    'projects.p1duration': '10 أشهر (8 + ملحق شهرين)',
    'projects.p1mode': 'مناقصة وطنية',
    'projects.p1scope': 'بناء كامل لمحطة نقل على محور نواكشوط-نواذيبو، يشمل المباني والمرافق والبنية التحتية المرتبطة.',
    'projects.p1d1': 'بناء محطة النقل والمباني الملحقة',
    'projects.p1d2': 'رصف بالخرسانة المسلحة سمك 8 سم لموقف السيارات',
    'projects.p1d3': 'خزان مياه من الخرسانة المسلحة سعة 20م\u00b3',
    'projects.p1result': 'مشروع مسلم ومعتمد من AROTR. شهادة التنفيذ صدرت. ملحق ممنوح لأعمال إضافية (+18.8%).',
    'projects.p2title': 'مسجد عبد الله حسن الشهابي',
    'projects.p2desc': 'بناء مسجد كامل خلال 10 أشهر، تم تنفيذه وفقاً للمواصفات المطلوبة.',
    'projects.p2value': 'معتمد',
    'projects.p2client': 'جمعية اليد العليا',
    'projects.p2scope': 'بناء مسجد كامل وفقاً للمواصفات المعمارية والتقنية المطلوبة.',
    'projects.p2result': 'أعمال منجزة وفقاً للمواصفات. شهادة حسن التنفيذ صدرت.',
    'projects.p3title': 'أسوار ومصدات رياح - السور الأخضر العظيم',
    'projects.p3desc': 'تركيب أسوار ومصدات رياح لمواقع كرو (لعصابة) ودويرارة (الحوض الغربي). مشروع بيئي وطني.',
    'projects.p3client': 'ANGMV - وزارة البيئة',
    'projects.p3scope': 'تركيب أسوار ومصدات رياح لمواقع كرو (ولاية لعصابة) ودويرارة (ولاية الحوض الغربي) في إطار برنامج السور الأخضر العظيم الوطني.',
    'projects.p3result': 'عقد منفذ بنجاح في 45 يوماً. شهادة حسن التنفيذ صدرت من المدير العام للوكالة.',
    'projects.p3funding': 'إعانة الدولة',
    'projects.p4title': 'خزان مياه وربط - منطقة لعصابة',
    'projects.p4desc': 'إعادة بناء خزان مياه بسعة 30 متر مكعب، تهجين وربط آبار. تركيب 3000 متر خطي من أنابيب PEHD ومولد كهربائي 30KVA.',
    'projects.p4client': 'وزارة الموارد المائية والصرف الصحي',
    'projects.p4scope': 'إعادة بناء خزان مياه وتهجين/ربط بئر بالخزان الموجود في ولاية لعصابة.',
    'projects.p4d1': 'خزان مياه 30م\u00b3 بارتفاع 12م',
    'projects.p4d2': '3000 متر خطي من أنابيب PEHD قطر 63 PN10',
    'projects.p4d3': 'مولد كهربائي 30 KVA مُركب',
    'projects.p4result': 'شهادة حسن الإنجاز صدرت من مديرية الموارد المائية.',
    'projects.p4funding': 'ميزانية الدولة',
    'projects.months': 'أشهر',
    'projects.days': 'يوم',

    'method.tag': 'منهجنا',
    'method.title': 'منهجية العمل',
    'method.desc': 'عملية منظمة لضمان الجودة والالتزام بالمواعيد',
    'method.s1title': 'التقييم',
    'method.s1desc': 'تحليل الاحتياجات ودراسة الموقع وتقييم القيود التقنية',
    'method.s2title': 'التخطيط',
    'method.s2desc': 'إعداد خطط التنفيذ والجدولة والميزانية التفصيلية',
    'method.s3title': 'التعبئة',
    'method.s3desc': 'نشر الفرق والمعدات والمواد في الموقع',
    'method.s4title': 'التنفيذ',
    'method.s4desc': 'تنفيذ الأعمال وفقاً للمواصفات والجدول الزمني المحدد',
    'method.s5title': 'مراقبة الجودة',
    'method.s5desc': 'التحقق المستمر من المطابقة ومتابعة المعايير التقنية',
    'method.s6title': 'التسليم',
    'method.s6desc': 'تسليم المشروع للعميل مع الوثائق والشهادات',

    'partners.tag': 'عملاؤنا',
    'partners.title': 'أنواع العملاء والشركاء',
    'partners.desc': 'الشريك المحلي المثالي للمؤسسات العامة والشركات الدولية الراغبة في العمل في موريتانيا',
    'partners.p1': 'الوزارات الحكومية',
    'partners.p1desc': 'التجهيز، الموارد المائية، البيئة، الإسكان',
    'partners.p2': 'الوكالات العامة',
    'partners.p2desc': 'AROTR، ANGMV ومؤسسات عامة أخرى',
    'partners.p3': 'المنظمات غير الحكومية والجمعيات',
    'partners.p3desc': 'المنظمات الخيرية والجمعيات المحلية',
    'partners.p4': 'القطاع الخاص',
    'partners.p4desc': 'الشركات الوطنية والدولية',

    'equipment.tag': 'أسطول المعدات',
    'equipment.title': 'معداتنا',
    'equipment.desc': 'أسطول شامل من المعدات المملوكة والمستأجرة، مصمم لتلبية متطلبات كل مشروع',
    'equipment.catTransport': 'النقل والمركبات',
    'equipment.catTransportDesc': 'سيارات اتصال، شاحنات قلابة، ومركبات نقل الأفراد والمواد',
    'equipment.t1': 'سيارات دفع رباعي لجميع التضاريس',
    'equipment.t2': 'شاحنات قلابة متعددة الحمولات',
    'equipment.t3': 'مركبات نقل الأفراد',
    'equipment.catConstruction': 'البناء والدمك',
    'equipment.catConstructionDesc': 'معدات خلط الخرسانة والدمك والاهتزاز لأعمال الهندسة المدنية',
    'equipment.c1': 'خلاطات خرسانة صناعية',
    'equipment.c2': 'ضاغطات وألواح اهتزازية',
    'equipment.c3': 'مداحل طرق',
    'equipment.c4': 'هزازات خرسانة',
    'equipment.catEnergy': 'الطاقة والأدوات',
    'equipment.catEnergyDesc': 'مولدات كهربائية وأدوات متخصصة للأعمال الكهربائية والسباكة والهندسة المدنية',
    'equipment.e1': 'مولدات كهربائية للمواقع',
    'equipment.e2': 'أدوات كهربائية وسباكة',
    'equipment.e3': 'معدات لحام وقطع',
    'equipment.catHydraulic': 'الهيدروليك والحفر',
    'equipment.catHydraulicDesc': 'معدات لأعمال إمدادات المياه والحفر والمنشآت الهيدروليكية',
    'equipment.h1': 'مضخات هيدروليكية',
    'equipment.h2': 'معدات حفر',
    'equipment.h3': 'مواد الأنابيب',
    'equipment.note': 'المعدات متوفرة كمملوكة أو مستأجرة حسب احتياجات المشروع. إمكانية توفير معدات إضافية عند الطلب.',

    'cert.tag': 'الامتثال',
    'cert.title': 'الشهادات والاعتمادات',
    'cert.desc': 'متوافق تماماً مع المتطلبات القانونية والتنظيمية الموريتانية',
    'cert.c1title': 'شهادة البناء',
    'cert.c1desc': 'تصنيف BAT2 - البناء والمعدات العامة',
    'cert.c1issuer': 'وزارة الإسكان والتعمير',
    'cert.c1valid': 'صالحة حتى مايو 2028',
    'cert.active': 'نشط',
    'cert.c2title': 'الانتظام الضريبي',
    'cert.c2desc': 'شهادة المديرية العامة للضرائب',
    'cert.c2issuer': 'المديرية العامة للضرائب',
    'cert.c2date': 'الشهادة محدثة',
    'cert.compliant': 'منتظم',
    'cert.c3title': 'شهادة CNSS',
    'cert.c3desc': 'الصندوق الوطني للضمان الاجتماعي - لا اشتراكات متأخرة',
    'cert.c3issuer': 'الصندوق الوطني للضمان الاجتماعي',
    'cert.c3date': 'لا اشتراكات متأخرة',
    'cert.uptodate': 'محدث',
    'cert.c4title': 'السجل التجاري',
    'cert.c4desc': 'التسجيل التجاري والتعريف الضريبي',
    'cert.c4issuer': 'السجل التجاري - نواكشوط',
    'cert.c4date': 'مسجل منذ 2019',
    'cert.registered': 'مسجل',

    'team.tag': 'فريقنا',
    'team.title': 'الهيكل التنظيمي',
    'team.desc': 'فريق متعدد التخصصات مؤهل وذو خبرة',
    'team.director': 'المدير العام',
    'team.management': 'الإدارة والإشراف',
    'team.trades': 'فرق المهن',
    'team.support': 'الدعم واللوجستيات',
    'team.t1': 'مهندس مدني - مدير الأشغال',
    'team.t2': 'تقني سام في الهندسة المدنية - مشرف الأشغال',
    'team.t3': 'رئيس ورشة هندسة مدنية',
    'team.t4': 'تقني سام في المساحة',
    'team.t5': 'تقني سام في السباكة',
    'team.t6': 'عمال متخصصون في البناء والهياكل',
    'team.t7': 'فريق عمال مؤهلين وأيدي عاملة',
    'team.t8': 'حراس، مسجلون، سائقون، ميكانيكيون',
    'team.tr1': 'بناؤون',
    'team.tr2': 'حدادون',
    'team.tr3': 'نجارون',
    'team.tr4': 'سباكون',
    'team.tr5': 'متخصصو قوالب',
    'team.tr6': 'دهانون',
    'team.tr7': 'كهربائيون',
    'team.tr8': 'مبلطون',
    'team.tr9': 'عمال حفر',

    'contact.tag': 'اتصل بنا',
    'contact.title': 'طلب عرض أسعار',
    'contact.desc': 'الرد خلال 24 ساعة. تواصل معنا لطلب عروض الأسعار أو الاستفسارات أو الشراكات.',
    'contact.trust': 'رد مضمون خلال 24 ساعة',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.hours': 'ساعات العمل',
    'contact.hoursText': 'الاثنين - الجمعة: 8:00 صباحاً - 5:00 مساءً',
    'contact.waTitle': 'رد سريع عبر واتساب',
    'contact.waDesc': 'راسلنا مباشرة، نرد في دقائق.',
    'contact.waBtn': 'فتح واتساب',
    'contact.or': 'أو أرسل رسالة',
    'contact.phName': 'الاسم',
    'contact.phPhone': 'الهاتف (يفضل واتساب)',
    'contact.phSubject': 'الموضوع',
    'contact.optQuote': 'طلب عرض أسعار',
    'contact.opt1': 'شراكة',
    'contact.opt2': 'مشروع',
    'contact.opt3': 'طلب خدمة',
    'contact.opt4': 'أخرى',
    'contact.phMessage': 'رسالتك...',
    'contact.send': 'إرسال',

    'faq.title': 'الأسئلة الشائعة',
    'faq.desc': 'اعثر على إجابات للأسئلة الأكثر شيوعاً',
    'faq.q1': 'ما هي أنواع المشاريع التي تنفذها شركة MCGS SARL؟',
    'faq.a1': 'تنفذ شركة MCGS SARL مشاريع بناء المباني (المدارس، المساجد، محطات النقل)، الأشغال الهيدروليكية (خزانات المياه، شبكات الأنابيب)، المشاريع البيئية (الأسوار، مصدات الرياح للسور الأخضر العظيم)، بالإضافة إلى خدمات الاستيراد والتصدير وتركيب الطاقة الشمسية.',
    'faq.q2': 'ما هو تصنيف البناء لشركة MCGS SARL؟',
    'faq.a2': 'تحمل شركة MCGS SARL تصنيف BAT2 لأنشطة البناء والمعدات العامة، معتمدة من وزارة الإسكان والتعمير وتهيئة الإقليم. هذه الشهادة صالحة حتى مايو 2028.',
    'faq.q3': 'هل شركة MCGS SARL ملتزمة ضريبياً واجتماعياً؟',
    'faq.a3': 'نعم، شركة MCGS SARL ملتزمة تماماً. شهادة الانتظام الضريبي محدثة لدى المديرية العامة للضرائب. شهادة CNSS تؤكد عدم وجود اشتراكات متأخرة.',
    'faq.q4': 'كيف يمكن أن تصبح شريكاً لشركة MCGS SARL؟',
    'faq.a4': 'ترحب شركة MCGS SARL بالشراكات لتوسيع قدراتها وتقديم حلول مبتكرة ومتكاملة. نحن الشريك المحلي المثالي للشركات الدولية الراغبة في دخول السوق الموريتاني. تواصل معنا عبر النموذج أو عبر الهاتف.',
    'faq.q5': 'ما هي المناطق الجغرافية التي تغطيها شركة MCGS SARL؟',
    'faq.a5': 'مقرها في نواكشوط (لكصر)، تعمل شركة MCGS SARL في جميع أنحاء موريتانيا، بما في ذلك منطقة لعصابة والحوض الغربي ومحور نواكشوط-نواذيبو.',
    'faq.q6': 'ما هي المعدات المتوفرة؟',
    'faq.a6': 'تمتلك شركة MCGS SARL أكثر من 10 معدات تشمل سيارات تويوتا هايلكس، شاحنة قلابة مرسيدس، خلاطات خرسانة، ضواغط، مولدات هوندا، هزازات خرسانة، ومجموعات كاملة من معدات الهندسة المدنية والكهرباء والسباكة.',

    'footer.desc': 'مقاول متعدد القطاعات في البناء والهيدروليك والطاقة الشمسية والتجارة العامة في موريتانيا.',
    'footer.quicklinks': 'التنقل',
    'footer.services': 'القطاعات',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.legal': 'لكصر، نواكشوط، موريتانيا'
  }
};

// --- State ---
let currentLang = 'fr';

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initLanguageSwitcher();
  initScrollAnimations();
  initCounters();
  initFAQ();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
  initActiveNav();
  initServicesSlider();
  initProjectNav();
});

// --- Preloader ---
function initPreloader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('loaded');
    }, 1600);
  });
  // Fallback
  setTimeout(() => {
    document.getElementById('preloader').classList.add('loaded');
  }, 3000);
}

// --- Navbar ---
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// --- Language Switcher ---
function initLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = lang;
      applyTranslations(lang);

      // RTL for Arabic
      if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
      }
    });
  });
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Handle placeholder translations
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.service-card, .case-study, .equip-cap-card, .cert-card, .value-card, .info-card, .partner-card, .faq-item, .contact-item, .method-tl-step'
  );

  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// --- Counter Animation ---
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  let counted = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.count);
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
          }, 16);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) observer.observe(statsSection);
}

// --- FAQ Accordion ---
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Open clicked
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// --- Contact Form ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Build WhatsApp message
    const messages = {
      fr: `Bonjour MCGS SARL,%0A%0ANom: ${data.name}%0ATel: ${data.phone || 'N/A'}%0ASujet: ${data.subject}%0A%0AMessage:%0A${data.message}`,
      en: `Hello MCGS SARL,%0A%0AName: ${data.name}%0APhone: ${data.phone || 'N/A'}%0ASubject: ${data.subject}%0A%0AMessage:%0A${data.message}`,
      ar: `مرحباً MCGS SARL,%0A%0Aالاسم: ${data.name}%0Aالهاتف: ${data.phone || 'N/A'}%0Aالموضوع: ${data.subject}%0A%0Aالرسالة:%0A${data.message}`
    };

    const msg = messages[currentLang] || messages.fr;
    window.open(`https://wa.me/22248727293?text=${msg}`, '_blank');

    // Show success
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    const successTexts = { fr: 'Envoye!', en: 'Sent!', ar: 'تم الإرسال!' };
    btn.textContent = successTexts[currentLang] || successTexts.fr;
    btn.style.background = 'var(--green-light)';

    setTimeout(() => {
      btn.textContent = origText;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// --- Back to Top ---
function initBackToTop() {
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Smooth Scroll ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// --- Active Navigation ---
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// --- Services Slider ---
function initServicesSlider() {
  const slider = document.getElementById('servicesSlider');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  if (!slider) return;

  const cards = slider.querySelectorAll('.service-card');
  let perView = 3;

  function getPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function buildDots() {
    perView = getPerView();
    const totalDots = Math.ceil(cards.length / perView);
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => scrollToIndex(i));
      dotsContainer.appendChild(dot);
    }
  }

  function scrollToIndex(i) {
    perView = getPerView();
    const card = cards[i * perView];
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    updateDots(i);
  }

  function updateDots(activeIdx) {
    dotsContainer.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === activeIdx);
    });
  }

  function getCurrentIndex() {
    perView = getPerView();
    const scrollLeft = slider.scrollLeft;
    const cardWidth = cards[0].offsetWidth + 24;
    return Math.round(scrollLeft / (cardWidth * perView));
  }

  prevBtn.addEventListener('click', () => {
    const idx = Math.max(0, getCurrentIndex() - 1);
    scrollToIndex(idx);
  });

  nextBtn.addEventListener('click', () => {
    const maxIdx = Math.ceil(cards.length / getPerView()) - 1;
    const idx = Math.min(maxIdx, getCurrentIndex() + 1);
    scrollToIndex(idx);
  });

  slider.addEventListener('scroll', () => {
    updateDots(getCurrentIndex());
  });

  buildDots();
  window.addEventListener('resize', buildDots);
}

// --- Project Navigation ---
function initProjectNav() {
  const btns = document.querySelectorAll('.project-nav-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) {
        const offset = 160;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
