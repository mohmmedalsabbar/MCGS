/* =========================================
   MCGS SARL - Website JavaScript
   ========================================= */

// --- Translations ---
const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.methodology': 'Méthodologie',
    'nav.equipment': 'Équipements',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',

    'hero.badge': 'Entrepreneur Certifié BAT2',
    'hero.title': 'Infrastructure, Construction et Solutions d\'Ingénierie Durable en Mauritanie depuis 2019',
    'hero.subtitle': 'Entrepreneur de confiance en travaux publics, hydraulique, énergie solaire et services généraux. Des projets conformes aux normes et réalisés avec une haute qualité.',
    'hero.cta1': 'Demander un Devis',
    'hero.cta2': 'WhatsApp',
    'hero.cta3': 'Nos Réalisations',
    'hero.trust1': 'Certifié BAT2',
    'hero.trust2': 'Partenaire Gouvernemental',
    'hero.trust3': 'Couverture Nationale',
    'hero.trust4': 'Multi-Sectoriel',

    'about.tag': 'À Propos',
    'about.title': 'Entrepreneur Multi-Sectoriel en Mauritanie',
    'about.lead': 'MCGS SARL est une entreprise multisectorielle spécialisée dans la réalisation d\'infrastructures et la fourniture de solutions techniques conformes aux normes et réglementations en vigueur en Mauritanie.',
    'about.text1': 'Fondée en 2019 à Nouakchott sous la forme d\'une Société à Responsabilité Limitée (SARL), notre entreprise intervient dans les domaines de la construction de bâtiments et d\'équipements publics, des travaux hydrauliques, de l\'installation de systèmes d\'énergie solaire ainsi que du commerce général et de l\'import-export.',
    'about.text2': 'Grâce à une équipe qualifiée et à une solide expérience de terrain, nous avons mené à bien de nombreux projets pour des ministères, des agences publiques et des organisations non gouvernementales à travers le pays. Nous nous engageons à fournir des prestations de haute qualité, dans le respect des normes techniques, des délais contractuels et des exigences de nos clients.',
    'about.form': 'Forme Juridique',
    'about.founded': 'Date de Création',
    'about.foundedYear': '2019',
    'about.location': 'Siège Social',
    'about.classification': 'Classification BTP',
    'about.vheading': 'Nos Engagements',
    'about.v1title': 'Qualité',
    'about.v1desc': 'Exécution conforme aux spécifications techniques et normes en vigueur',
    'about.v2title': 'Innovation',
    'about.v2desc': 'Solutions techniques adaptées incluant énergie solaire et méthodes modernes',
    'about.v3title': 'Durabilité',
    'about.v3desc': 'Projets intégrant des solutions éco-responsables et durables',

    'services.tag': 'Nos Services',
    'services.title': 'Capacités Techniques',
    'services.desc': 'Solutions d\'ingénierie et de construction multi-sectorielles',
    'services.s1title': 'Construction & Travaux Publics',
    'services.s1desc': 'Construction de bâtiments, écoles, mosquées, centres éducatifs et gares routières selon les normes les plus strictes.',
    'services.s1tag': 'BAT2 Certifié',
    'services.s1c1': 'Structures en béton armé (bâtiments, écoles, mosquées)',
    'services.s1c2': 'Infrastructures de transport (gares, parkings)',
    'services.s1c3': 'Dallage, coffrage et maçonnerie spécialisée',
    'services.s1c4': 'Conforme aux normes de classification BAT2',
    'services.s2title': 'Hydraulique & Eau',
    'services.s2desc': 'Construction de châteaux d\'eau, installation de réseaux de canalisations et systèmes de pompage solaire.',
    'services.s2tag': 'Infrastructure',
    'services.s2c1': 'Construction de châteaux d\'eau (20-30 m3+)',
    'services.s2c2': 'Pose de conduites PEHD (capacité 3000m+)',
    'services.s2c3': 'Hybridation et raccordement de forages',
    'services.s2c4': 'Systèmes de pompage solaire',
    'services.s3title': 'Import-Export',
    'services.s3desc': 'Commerce général d\'importation et d\'exportation couvrant une large gamme de produits et matériaux.',
    'services.s3tag': 'International',
    'services.s3c1': 'Approvisionnement en matériaux de construction',
    'services.s3c2': 'Importation d\'équipements et fournitures techniques',
    'services.s3c3': 'Commerce général de produits et matériaux',
    'services.s4title': 'Énergie Solaire',
    'services.s4desc': 'Installation de pompes solaires et solutions d\'énergie propre pour un développement durable.',
    'services.s4tag': 'Renouvelable',
    'services.s4c1': 'Installation de systèmes de pompage solaire',
    'services.s4c2': 'Solutions hors-réseau pour zones rurales',
    'services.s4c3': 'Groupes électrogènes et alimentation de chantier',
    'services.s5title': 'Aménagement & Agriculture',
    'services.s5desc': 'Aménagement de terres agricoles avec techniques modernes incluant clôtures et brise-vent.',
    'services.s5tag': 'Environnement',
    'services.s5c1': 'Installation de clôtures et brise-vent',
    'services.s5c2': 'Aménagement de sites environnementaux',
    'services.s5c3': 'Travaux de terrassement et préparation de terrain',
    'services.s6title': 'Prestation de Services',
    'services.s6desc': 'Services diversifiés adaptés aux besoins de nos clients, avec une équipe qualifiée et expérimentée.',
    'services.s6tag': 'Sur Mesure',
    'services.s6c1': 'Génie civil, électricité et plomberie',
    'services.s6c2': 'Topographie et études techniques',
    'services.s6c3': 'Équipes pluridisciplinaires mobilisables',

    'projects.tag': 'Portfolio',
    'projects.title': 'Études de Cas',
    'projects.desc': 'Projets exécutés, certifiés et livrés avec attestations de bonne exécution',
    'projects.nav1': 'Gare Routière',
    'projects.nav2': 'Mosquée',
    'projects.nav3': 'Grande Muraille',
    'projects.nav4': 'Château d\'Eau',
    'projects.completed': 'Terminé & Certifié',
    'projects.certified': 'Certifié',
    'projects.client': 'Client',
    'projects.location': 'Localisation',
    'projects.duration': 'Durée',
    'projects.mode': 'Attribution',
    'projects.funding': 'Financement',
    'projects.scope': 'Étendue des Travaux',
    'projects.deliverables': 'Livrables Clés',
    'projects.result': 'Résultat',
    'projects.p1title': 'Gare Routière - Axe Nouakchott-Nouadhibou',
    'projects.p1desc': 'Construction d\'une gare routière complète incluant parking en béton armé et réservoir d\'eau de 20m3. Marché attribué par le Ministère de l\'Équipement et des Transports.',
    'projects.p1client': 'Min. de l\'Équipement et des Transports',
    'projects.p1duration': '10 mois (8 + avenant 2 mois)',
    'projects.p1mode': 'Appel d\'Offres National',
    'projects.p1scope': 'Construction complète d\'une gare routière sur l\'axe Nouakchott-Nouadhibou, incluant bâtiments, aménagements et infrastructures connexes.',
    'projects.p1d1': 'Construction de la gare routière et bâtiments annexes',
    'projects.p1d2': 'Dallage en béton armé Ep. 8cm pour le parking',
    'projects.p1d3': 'Réserve d\'eau en béton armé de 20m3',
    'projects.p1result': 'Projet livré et certifié par l\'AROTR. Avenant accordé pour travaux complémentaires (+18.8%). Attestation d\'exécution délivrée.',
    'projects.p2title': 'Mosquée Abdallah Hassan Al-Shihabi',
    'projects.p2desc': 'Construction complète d\'une mosquée sur 10 mois, réalisée conformément aux spécifications requises.',
    'projects.p2value': 'Certifié',
    'projects.p2client': 'Assoc. El YedOlya',
    'projects.p2scope': 'Construction intégrale d\'une mosquée selon les spécifications architecturales et techniques requises.',
    'projects.p2result': 'Travaux réalisés conformément aux spécifications. Attestation de bonne exécution délivrée.',
    'projects.p3title': 'Clôtures & Brise-Vent - Grande Muraille Verte',
    'projects.p3desc': 'Pose de clôtures et brise-vent pour les sites de Guerou (Assaba) et Dwirara (Hodh El Gharbi). Projet environnemental national.',
    'projects.p3client': 'ANGMV - Min. Environnement',
    'projects.p3scope': 'Pose de clôtures et brise-vent pour les sites de Guerou (Wilaya de l\'Assaba) et Dwirara (Wilaya du Hodh El Gharbi) dans le cadre du programme national de la Grande Muraille Verte.',
    'projects.p3result': 'Contrat exécuté avec satisfaction en 45 jours. Attestation de bonne exécution délivrée par le Directeur Général de l\'ANGMV.',
    'projects.p3funding': 'Subvention de l\'État',
    'projects.p4title': 'Château d\'Eau & Raccordement - Région Assaba',
    'projects.p4desc': 'Reconstruction d\'un château d\'eau de 30m3, hybridation et raccordement de forage. Installation de 3000ml de conduite PEHD et groupe électrogène 30KVA.',
    'projects.p4client': 'Min. de l\'Hydraulique et de l\'Assainissement',
    'projects.p4scope': 'Reconstruction d\'un château d\'eau et hybridation/raccordement d\'un forage au château d\'eau existant dans la Wilaya de l\'Assaba.',
    'projects.p4d1': 'Château d\'eau de 30m3 à 12m de hauteur',
    'projects.p4d2': '3 000 ml de conduite PEHD diamètre 63 PN10',
    'projects.p4d3': 'Groupe électrogène de 30 KVA installé',
    'projects.p4result': 'Attestation de bonne fin délivrée par la Direction de l\'Hydraulique.',
    'projects.p4funding': 'Budget de l\'État',
    'projects.months': 'mois',
    'projects.days': 'jours',

    'method.tag': 'Notre Approche',
    'method.title': 'Méthodologie de Travail',
    'method.desc': 'Un processus structuré pour garantir la qualité et le respect des délais',
    'method.s1title': 'Évaluation',
    'method.s1desc': 'Analyse des besoins, étude du site et évaluation des contraintes techniques',
    'method.s2title': 'Planification',
    'method.s2desc': 'Élaboration des plans d\'exécution, planning et budget détaillé',
    'method.s3title': 'Mobilisation',
    'method.s3desc': 'Déploiement des équipes, équipements et matériaux sur site',
    'method.s4title': 'Exécution',
    'method.s4desc': 'Réalisation des travaux selon les spécifications et le planning établi',
    'method.s5title': 'Contrôle Qualité',
    'method.s5desc': 'Vérification continue de la conformité et suivi des normes techniques',
    'method.s6title': 'Livraison',
    'method.s6desc': 'Remise du projet au client avec documentation et attestations',

    'partners.tag': 'Nos Clients',
    'partners.title': 'Types de Clients & Partenaires',
    'partners.desc': 'Partenaire local idéal pour les institutions publiques et les entreprises internationales souhaitant opérer en Mauritanie',
    'partners.p1': 'Ministères Gouvernementaux',
    'partners.p1desc': 'Équipement, Hydraulique, Environnement, Habitat',
    'partners.p2': 'Agences Publiques',
    'partners.p2desc': 'AROTR, ANGMV et autres établissements publics',
    'partners.p3': 'ONG & Associations',
    'partners.p3desc': 'Organisations caritatives et associations locales',
    'partners.p4': 'Secteur Privé',
    'partners.p4desc': 'Entreprises nationales et internationales',

    'equipment.tag': 'Parc Matériel',
    'equipment.title': 'Nos Équipements',
    'equipment.desc': 'Un parc matériel complet, en propriété et en location, adapté à chaque projet',
    'equipment.catTransport': 'Transport & Véhicules',
    'equipment.catTransportDesc': 'Véhicules de liaison, camions bennes, véhicules de transport pour le personnel et les matériaux',
    'equipment.t1': 'Véhicules 4x4 tout-terrain',
    'equipment.t2': 'Camions bennes multi-tonnages',
    'equipment.t3': 'Véhicules de transport de personnel',
    'equipment.catConstruction': 'Construction & Compactage',
    'equipment.catConstructionDesc': 'Équipements de bétonnage, compactage et vibration pour les travaux de génie civil',
    'equipment.c1': 'Bétonnières industrielles',
    'equipment.c2': 'Compacteurs et plaques vibrantes',
    'equipment.c3': 'Rouleaux compresseurs',
    'equipment.c4': 'Vibrateurs à béton',
    'equipment.catEnergy': 'Énergie & Outillage',
    'equipment.catEnergyDesc': 'Groupes électrogènes, outillage spécialisé pour les travaux électriques, plomberie et génie civil',
    'equipment.e1': 'Groupes électrogènes de chantier',
    'equipment.e2': 'Outillage électrique et plomberie',
    'equipment.e3': 'Matériel de soudure et découpe',
    'equipment.catHydraulic': 'Hydraulique & Forage',
    'equipment.catHydraulicDesc': 'Matériel pour les travaux d\'adduction d\'eau, forage et installations hydrauliques',
    'equipment.h1': 'Pompes hydrauliques',
    'equipment.h2': 'Équipements de forage',
    'equipment.h3': 'Matériel de canalisation',
    'equipment.note': 'Matériel disponible en propriété et en location selon les besoins du projet. Capacité d\'acquisition supplémentaire sur demande.',

    'cert.tag': 'Conformité',
    'cert.title': 'Certifications & Agrément',
    'cert.desc': 'Pleinement conforme aux exigences légales et réglementaires mauritaniennes',
    'cert.c1title': 'Certificat BTP',
    'cert.c1desc': 'Classification BAT2 - Bâtiment et Équipements Publics',
    'cert.c1issuer': 'Ministère de l\'Habitat et de l\'Urbanisme',
    'cert.c1valid': 'Valide jusqu\'en Mai 2028',
    'cert.active': 'Actif',
    'cert.c2title': 'Régularité Fiscale',
    'cert.c2desc': 'Attestation DGI - Direction Générale des Impôts',
    'cert.c2issuer': 'Direction Générale des Impôts',
    'cert.c2date': 'Attestation à jour',
    'cert.compliant': 'En Règle',
    'cert.c3title': 'Attestation CNSS',
    'cert.c3desc': 'Caisse Nationale de Sécurité Sociale - Aucune cotisation impayée',
    'cert.c3issuer': 'Caisse Nationale de Sécurité Sociale',
    'cert.c3date': 'Aucune cotisation impayée',
    'cert.uptodate': 'À Jour',
    'cert.c4title': 'Registre du Commerce',
    'cert.c4desc': 'Enregistrement commercial et identification fiscale',
    'cert.c4issuer': 'Registre du Commerce - Nouakchott',
    'cert.c4date': 'Enregistré depuis 2019',
    'cert.registered': 'Enregistré',

    'team.tag': 'Notre Équipe',
    'team.title': 'Structure Organisationnelle',
    'team.desc': 'Une équipe pluridisciplinaire qualifiée et expérimentée',
    'team.director': 'Directeur Général',
    'team.management': 'Direction & Encadrement',
    'team.trades': 'Corps de Métiers',
    'team.support': 'Support & Logistique',
    'team.t1': 'Ingénieur en Génie Civil - Directeur des Travaux',
    'team.t2': 'Technicien Supérieur en Génie Civil - Conducteur de Travaux',
    'team.t3': 'Chef de Chantier en Génie Civil',
    'team.t4': 'Technicien Supérieur en Topographie',
    'team.t5': 'Technicien Supérieur en Plomberie',
    'team.t6': 'Ouvriers spécialisés en Maçonnerie et Structure',
    'team.t7': 'Équipe d\'ouvriers qualifiés et manoeuvres',
    'team.t8': 'Gardiens, pointeurs, chauffeurs, mécaniciens',
    'team.tr1': 'Maçons',
    'team.tr2': 'Ferrailleurs',
    'team.tr3': 'Menuisiers',
    'team.tr4': 'Plombiers',
    'team.tr5': 'Coffreurs',
    'team.tr6': 'Peintres',
    'team.tr7': 'Électriciens',
    'team.tr8': 'Carreleurs',
    'team.tr9': 'Terrassiers',

    'contact.tag': 'Contact',
    'contact.title': 'Demander un Devis',
    'contact.desc': 'Réponse sous 24 heures. Contactez-nous pour toute demande de devis, renseignement ou partenariat.',
    'contact.trust': 'Réponse garantie sous 24 heures',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.hours': 'Horaires',
    'contact.hoursText': 'Lundi - Vendredi: 8h00 - 17h00',
    'contact.waTitle': 'Réponse Rapide via WhatsApp',
    'contact.waDesc': 'Écrivez-nous directement, nous répondons en quelques minutes.',
    'contact.waBtn': 'Ouvrir WhatsApp',
    'contact.or': 'ou envoyez un message',
    'contact.phName': 'Nom',
    'contact.phPhone': 'Téléphone (WhatsApp de préférence)',
    'contact.phSubject': 'Sujet',
    'contact.optQuote': 'Demande de Devis',
    'contact.opt1': 'Partenariat',
    'contact.opt2': 'Projet',
    'contact.opt3': 'Demande de Service',
    'contact.opt4': 'Autre',
    'contact.phMessage': 'Votre message...',
    'contact.send': 'Envoyer',

    'faq.title': 'Questions Fréquentes',
    'faq.desc': 'Trouvez les réponses aux questions les plus courantes',
    'faq.q1': 'Quels types de projets MCGS SARL réalise-t-elle?',
    'faq.a1': 'MCGS SARL réalise des projets de construction de bâtiments (écoles, mosquées, gares routières), des travaux hydrauliques (châteaux d\'eau, réseaux de canalisations), des projets environnementaux (clôtures, brise-vent pour la Grande Muraille Verte), ainsi que des services d\'import-export et d\'installation d\'énergie solaire.',
    'faq.q2': 'Quelle est la classification BTP de MCGS SARL?',
    'faq.a2': 'MCGS SARL détient la classification BAT2 pour les activités de Bâtiment et Équipements Publics, certifiée par le Ministère de l\'Habitat, de l\'Urbanisme et de l\'Aménagement du Territoire. Ce certificat est valide jusqu\'en Mai 2028.',
    'faq.q3': 'MCGS SARL est-elle en règle fiscalement et socialement?',
    'faq.a3': 'Oui, MCGS SARL est pleinement conforme. L\'attestation de régularité fiscale est à jour auprès de la Direction Générale des Impôts. L\'attestation CNSS confirme qu\'aucune cotisation n\'est impayée.',
    'faq.q4': 'Comment devenir partenaire de MCGS SARL?',
    'faq.a4': 'MCGS SARL accueille favorablement les partenariats pour étendre ses capacités et offrir des solutions innovantes et intégrées. Nous sommes le partenaire local idéal pour les entreprises internationales souhaitant entrer sur le marché mauritanien. Contactez-nous via notre formulaire ou par téléphone.',
    'faq.q5': 'Quelles zones géographiques MCGS SARL couvre-t-elle?',
    'faq.a5': 'Basée à Nouakchott (KSAR), MCGS SARL opère à travers toute la Mauritanie, incluant les régions de l\'Assaba, du Hodh El Gharbi, et l\'axe Nouakchott-Nouadhibou.',
    'faq.q6': 'Quel est le parc matériel disponible?',
    'faq.a6': 'MCGS SARL dispose de plus de 10 équipements incluant des véhicules Toyota Hilux, un camion benne Mercedes, des bétonnières, des compacteurs, des groupes électrogènes Honda, des vibrateurs à béton, et des lots complets de matériels pour le génie civil, l\'électricité et la plomberie.',

    'footer.desc': 'Entrepreneur multi-sectoriel en construction, hydraulique, énergie solaire et commerce général en Mauritanie.',
    'footer.quicklinks': 'Navigation',
    'footer.services': 'Secteurs',
    'footer.rights': 'Tous droits réservés.',
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
    'hero.cta3': 'Our Projects',
    'hero.trust1': 'BAT2 Certified',
    'hero.trust2': 'Government Partner',
    'hero.trust3': 'Nationwide Coverage',
    'hero.trust4': 'Multi-Sector',

    'about.tag': 'About Us',
    'about.title': 'Multi-Sector Contractor in Mauritania',
    'about.lead': 'MCGS SARL is a multi-sector contractor delivering infrastructure services and technical solutions aligned with Mauritanian regulatory standards.',
    'about.text1': 'Founded in 2019 in Nouakchott as a limited liability company, we operate in public building construction, hydraulic infrastructure, solar energy systems, and general import-export trade.',
    'about.text2': 'We have successfully delivered projects for government ministries, public agencies, and NGOs across the country, with a consistent commitment to quality and compliance.',
    'about.form': 'Legal Form',
    'about.founded': 'Date of Creation',
    'about.foundedYear': '2019',
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
    'contact.email': 'Email',
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
    'hero.cta1': 'طلب تسعيرة',
    'hero.cta2': 'WhatsApp',
    'hero.cta3': 'مشاريعنا',
    'hero.trust1': 'معتمد BAT2',
    'hero.trust2': 'شريك حكومي',
    'hero.trust3': 'تغطية وطنية',
    'hero.trust4': 'متعدد القطاعات',

    'about.tag': 'من نحن',
    'about.title': 'مقاول متعدد القطاعات في موريتانيا',
    'about.lead': 'شركة MCGS SARL مقاول متعدد القطاعات يقدم خدمات البنية التحتية والحلول التقنية المتوافقة مع المعايير التنظيمية الموريتانية.',
    'about.text1': 'تأسست في 2019 بنواكشوط كشركة ذات مسؤولية محدودة، نعمل في بناء المباني العامة والبنية التحتية الهيدروليكية وأنظمة الطاقة الشمسية والتجارة العامة.',
    'about.text2': 'نفذنا بنجاح مشاريع لوزارات حكومية ووكالات عامة ومنظمات غير حكومية عبر البلاد، مع التزام دائم بالجودة والامتثال.',
    'about.form': 'الشكل القانوني',
    'about.founded': 'تاريخ التأسيس',
    'about.foundedYear': '2019',
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
    'contact.title': 'طلب تسعيرة',
    'contact.desc': 'الرد خلال 24 ساعة. تواصل معنا لطلب عروض الأسعار أو الاستفسارات أو الشراكات.',
    'contact.trust': 'رد مضمون خلال 24 ساعة',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.hoursText': 'الاثنين - الجمعة: 8:00 صباحاً - 5:00 مساءً',
    'contact.waTitle': 'رد سريع عبر واتساب',
    'contact.waDesc': 'راسلنا مباشرة، نرد في دقائق.',
    'contact.waBtn': 'فتح واتساب',
    'contact.or': 'أو أرسل رسالة',
    'contact.phName': 'الاسم',
    'contact.phPhone': 'الهاتف (يفضل واتساب)',
    'contact.phSubject': 'الموضوع',
    'contact.optQuote': 'طلب تسعيرة',
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
  // Standard reveal (fade up)
  const revealEls = document.querySelectorAll(
    '.service-card, .equip-cap-card, .cert-card, .value-card, .info-card, .partner-card, .faq-item, .contact-item, .method-tl-step'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  // About section: content slides from left, values from right
  document.querySelectorAll('.about-content').forEach(el => el.classList.add('reveal-left'));
  document.querySelectorAll('.about-values').forEach(el => el.classList.add('reveal-right'));

  // Contact form wrapper scales up
  document.querySelectorAll('.contact-form-wrapper').forEach(el => el.classList.add('reveal-scale'));

  // Section headers get their own class for staggered tag/title/desc
  const headers = document.querySelectorAll('.section-header');

  // Stagger grids
  document.querySelectorAll('.equip-capabilities-grid, .cert-grid, .partners-grid, .project-nav').forEach(el => {
    el.classList.add('stagger-children');
  });

  // All animatable elements
  const allAnimatable = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  allAnimatable.forEach(el => observer.observe(el));

  // Observe section headers separately
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        headerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  headers.forEach(h => headerObserver.observe(h));
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

// --- Project Navigation (Tabs) ---
function initProjectNav() {
  const btns = document.querySelectorAll('.project-nav-btn');
  const cases = document.querySelectorAll('.case-study');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cases.forEach(c => c.classList.remove('active'));
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
    });
  });
}
