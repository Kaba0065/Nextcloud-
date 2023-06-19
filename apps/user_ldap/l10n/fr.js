OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Erreur lors de la suppression des associations.",
    "Failed to delete the server configuration" : "Échec de la suppression de la configuration du serveur",
    "Invalid configuration: Anonymous binding is not allowed." : "Configuration non valable : Le lien anonyme n'est pas autorisé.",
    "Valid configuration, connection established!" : "Configuration valide, connexion établie !",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Configuration valide, mais le lien a échoué. Veuillez vérifier les paramètres du serveur ainsi que vos identifiants de connexion.",
    "Invalid configuration. Please have a look at the logs for further details." : "Configuration non valide. Veuillez consulter les logs pour plus de détails.",
    "No action specified" : "Aucune action spécifiée",
    "No configuration specified" : "Aucune configuration spécifiée",
    "No data specified" : "Aucune donnée spécifiée",
    "Invalid data specified" : "Données spécifiées invalides",
    " Could not set configuration %s" : "Impossible d'appliquer la configuration %s",
    "Action does not exist" : "L'action n'existe pas",
    "Renewing …" : "Renouvellement en cours...",
    "Very weak password" : "Mot de passe très faible",
    "Weak password" : "Mot de passe faible",
    "So-so password" : "Mot de passe tout juste acceptable",
    "Good password" : "Mot de passe de sécurité suffisante",
    "Strong password" : "Mot de passe fort",
    "The Base DN appears to be wrong" : "Le DN de base est erroné",
    "Testing configuration…" : "Test de configuration",
    "Configuration incorrect" : "Configuration incorrecte",
    "Configuration incomplete" : "Configuration incomplète",
    "Configuration OK" : "Configuration OK",
    "Select groups" : "Sélectionnez les groupes",
    "Select object classes" : "Sélectionner les classes d'objet",
    "Please check the credentials, they seem to be wrong." : "Veuillez vérifier vos informations d'identification",
    "Please specify the port, it could not be auto-detected." : "Veuillez indiquer le port, il n'a pu être détecté automatiquement.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Le DN de base n'a pu être détecté automatiquement. Vérifiez les informations d'identification, l'hôte et le port.",
    "Could not detect Base DN, please enter it manually." : "Impossible de détecter le DN de base, veuillez le saisir manuellement.",
    "{nthServer}. Server" : "{nthServer}. Serveur",
    "No object found in the given Base DN. Please revise." : "Aucun objet trouvé dans le DN de base spécifié. Veuillez le vérifier.",
    "More than 1,000 directory entries available." : "Il y a plus de 1 000 entrées de répertoire disponibles.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} entrée disponible dans le DN de base spécifié","{objectsFound} entrées disponibles dans le DN de base spécifié","{objectsFound} entrées disponibles dans le DN de base spécifié"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Une erreur est survenue. Veuillez vérifier le DN de base, ainsi que les paramètres de connexion et les informations d'identification",
    "Do you really want to delete the current Server Configuration?" : "Êtes-vous sûr de vouloir effacer la configuration serveur actuelle ?",
    "Confirm Deletion" : "Confirmer la suppression",
    "Mappings cleared successfully!" : "Associations supprimées avec succès !",
    "Error while clearing the mappings." : "Erreur lors de la suppression des associations.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Le lien anonyme n'est pas autorisé. Merci de fournir le DN d'un utilisateur et un mot de passe.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Erreur LDAP. La connexion anonyme au serveur n'est probablement pas acceptée.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "La sauvegarde a échoué. Veuillez vérifier que la base de données est opérationnelle. Rechargez avant de continuer.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Changer de mode activera les requêtes LDAP automatiques. Selon la taille de votre annuaire LDAP, cela peut prendre du temps. Voulez-vous toujours changer de mode ?",
    "Mode switch" : "Basculer de mode",
    "Select attributes" : "Sélectionner les attributs",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Utilisateur introuvable. Veuillez vérifier les attributs de login et le nom d'utilisateur. Filtre effectif (à copier-coller pour valider en ligne de commande):<br/>",
    "User found and settings verified." : "Utilisateur trouvé et paramètres vérifiés.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Veuillez affiner votre recherche, car elle inclue de nombreux utilisateurs. Seul le premier de cette liste sera capable de se connecter.",
    "An unspecified error occurred. Please check log and settings." : "Une erreur inconnue s'est produite. Veuillez vérifier le log et les paramètres.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Le filtre de recherche n'est pas valide, probablement à cause de problèmes de syntaxe tels que des parenthèses manquantes. Veuillez le corriger.",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "Une erreur s'est produite lors de la connexion au LDAP/AD. Veuillez vérifier l'hôte, le port et les informations d'identification.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "La chaîne \"%uid\" est manquante. Cette chaîne est remplacée par l'identifiant de connexion lors des requêtes LDAP/AD.",
    "Please provide a login name to test against" : "Veuillez indiquer un identifiant de connexion avec lequel tester.",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "Les groupes sont désactivés car le serveur LDAP/AD ne prend pas en charge memberOf.",
    "Password change rejected. Hint: " : "La modification du mot de passe a été rejetée. Indice :",
    "Please login with the new password" : "Veuillez vous connecter avec le nouveau mot de passe",
    "LDAP User backend" : "Infrastructure utilisateur LDAP",
    "Your password will expire tomorrow." : "Votre mot de passe expirera demain",
    "Your password will expire today." : "Votre mot de passe va expirer aujourd'hui.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Votre mot de passe va expirer dans %n jour.","Votre mot de passe va expirer dans %n jours.","Votre mot de passe va expirer dans %n jours."],
    "LDAP/AD integration" : "Integration LDAP/AD ",
    "_%n group found_::_%n groups found_" : ["%n groupe trouvé","%n groupes trouvés","%n groupes trouvés"],
    "> 1000 groups found" : "> 1000 groupes trouvés",
    "> 1000 users found" : "> 1000 utilisateurs trouvés",
    "_%n user found_::_%n users found_" : ["%n utilisateur trouvé","%n utilisateurs trouvés","%n utilisateurs trouvés"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Impossible de détecter l'attribut contenant le nom d'affichage des utilisateurs. Veuillez l'indiquer vous-même dans les paramètres LDAP avancés.",
    "Could not find the desired feature" : "Impossible de trouver la fonction souhaitée",
    "Invalid Host" : "Hôte non valide",
    "LDAP user and group backend" : "Utilisateur LDAP et infrastructure de groupe",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Cette application autorise les administrateurs à connecter Nextcloud à un annuaire LDAP.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Cette application permet aux administrateurs de connecter Nextcloud à un répertoire d'utilisateurs LDAP pour l'authentification et le provisionnement des utilisateurs, groupes et des attributs d'utilisateurs. Les administrateurs peuvent configurer cette application pour se connecter à un ou plusieurs répertoires LDAP ou Active Directories via une interface LDAP. Les attributs tels que le quota utilisateur, l'e-mail, les images d'avatar, les adhésions de groupe et plus peuvent être envoyés sur Nextcloud à partir d'un répertoire avec les requêtes et les filtres appropriés.\n\nUn utilisateur se connecte à Nextcloud avec ses identifiants LDAP ou AD et obtient l'accès sur la base d'une demande d'authentification gérée par le serveur LDAP ou AD. Nextcloud ne stocke pas les mots de passe LDAP ou AD, mais ces informations d'identification sont utilisées pour authentifier un utilisateur et Nextcloud utilise ensuite une session pour l'ID utilisateur. De plus amples informations sont disponibles dans la documentation LDAP User and Group Backend.",
    "Test Configuration" : "Tester la configuration",
    "Help" : "Aide",
    "Groups meeting these criteria are available in %s:" : "Les groupes respectant ces critères sont disponibles dans %s :",
    "Only these object classes:" : "Seulement ces classes d'objets :",
    "Only from these groups:" : "Seulement dans ces groupes :",
    "Search groups" : "Chercher dans les groupes",
    "Available groups" : "Groupes disponibles",
    "Selected groups" : "Groupes sélectionnés",
    "Edit LDAP Query" : "Modifier la requête LDAP",
    "LDAP Filter:" : "Filtre LDAP :",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Le filtre spécifie quels groupes LDAP ont accès à l'instance %s.",
    "Verify settings and count the groups" : "Vérifier les paramètres et compter les groupes",
    "When logging in, %s will find the user based on the following attributes:" : "À la connexion, %s cherchera l'utilisateur sur la base des attributs suivant :",
    "LDAP/AD Username:" : "Nom d'utilisateur LDAP/AD :",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Autorise l'authentification à partir du nom d'utilisateur LDAP/AD.Celui-ci sera détecté et pourra être soit \"uid\", soit \"sAMAccountName\".",
    "LDAP/AD Email Address:" : "Adresse électronique LDAP/AD :",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Autorise l'authentification par adresse e-mail. \"mail\" et \"mailPrimaryAddress\" sont autorisés.",
    "Other Attributes:" : "Autres attributs :",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Définit le filtre à appliquer lors de la tentative de connexion. \"%%uid\" remplace le nom d'utilisateur lors de l'authentification. Exemple: \"uid=%%uid\"",
    "Test Loginname" : "Loginname de test",
    "Attempts to receive a DN for the given loginname and the current login filter" : "Tente de recevoir un DN pour l'identifiant de connexion donné et le filtre de connexion courant.",
    "Verify settings" : "Tester les paramètres",
    "%s. Server:" : "%s. Serveur :",
    "Add a new configuration" : "Ajouter une nouvelle configuration",
    "Copy current configuration into new directory binding" : "Copier la configuration actuelle vers une nouvelle",
    "Delete the current configuration" : "Supprimer la configuration actuelle",
    "Host" : "Hôte",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Vous pouvez omettre le protocole, sauf si vous avez besoin de SSL. Dans ce cas, préfixez avec ldaps://",
    "Port" : "Port",
    "Detect Port" : "Détecter le port",
    "User DN" : "DN Utilisateur",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN de l'utilisateur client pour lequel la liaison doit se faire, par exemple uid=agent,dc=example,dc=com. Pour un accès anonyme, laisser le DN et le mot de passe vides.",
    "Password" : "Mot de passe",
    "For anonymous access, leave DN and Password empty." : "Pour un accès anonyme, laisser le DN utilisateur et le mot de passe vides.",
    "Save Credentials" : "Sauvegarder les informations d'identification",
    "One Base DN per line" : "Un DN de base par ligne",
    "You can specify Base DN for users and groups in the Advanced tab" : "Vous pouvez indiquer le DN de base de vos utilisateurs et groupes via l'onglet Avancé",
    "Detect Base DN" : "Détecter le DN de base",
    "Test Base DN" : "Tester le DN de base",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Évite les requêtes LDAP automatiques. Mieux pour les installations de grande ampleur, mais demande des connaissances en LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Saisir les filtres LDAP manuellement (recommandé pour les annuaires de grande ampleur)",
    "Listing and searching for users is constrained by these criteria:" : "Rechercher et lister les utilisateurs qui respectent ces critères :",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Les classes d'objets fréquentes pour les utilisateurs sont : organizationalPerson, person, user et inetOrgPerson. Si vous n'êtes pas sûr de la classe à utiliser, demandez à l'administrateur de l'annuaire.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Le filtre spécifie quels utilisateurs LDAP auront accès à l'instance %s.",
    "Verify settings and count users" : "Vérifier les paramètres et compter les utilisateurs",
    "Saving" : "Enregistrement...",
    "Back" : "Retour",
    "Continue" : "Continuer",
    "Please renew your password." : "Veuillez renouveler votre mot de passe.",
    "An internal error occurred." : "Une erreur interne est survenue.",
    "Please try again or contact your administrator." : "Veuillez réessayer ou contactez votre administrateur.",
    "Current password" : "Mot de passe actuel",
    "New password" : "Nouveau mot de passe",
    "Renew password" : "Renouveler le mot de passe",
    "Wrong password." : "Mot de passe incorrect.",
    "Cancel" : "Annuler",
    "Server" : "Serveur",
    "Users" : "Utilisateurs",
    "Login Attributes" : "Attributs de login",
    "Groups" : "Groupes",
    "Expert" : "Expert",
    "Advanced" : "Avancé",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Attention :</b> Le module php LDAP n'est pas installé, par conséquent cette extension ne pourra fonctionner. Veuillez contacter votre administrateur système afin qu'il l'installe.",
    "Connection Settings" : "Paramètres de connexion",
    "Configuration Active" : "Configuration active",
    "When unchecked, this configuration will be skipped." : "Lorsque non cochée, la configuration sera ignorée.",
    "Backup (Replica) Host" : "Serveur de backup (réplique)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Fournir un serveur de backup optionnel.  Il doit s'agir d'une réplique du serveur LDAP/AD principal.",
    "Backup (Replica) Port" : "Port du serveur de backup (réplique)",
    "Disable Main Server" : "Désactiver le serveur principal",
    "Only connect to the replica server." : "Se connecter uniquement à la réplique",
    "Turn off SSL certificate validation." : "Désactiver la validation des certificats SSL",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Non recommandé, à utiliser à des fins de tests uniquement. Si la connexion ne fonctionne qu'avec cette option, importez le certificat SSL du serveur LDAP dans le serveur %s.",
    "Cache Time-To-Live" : "Durée de vie du cache (TTL)",
    "in seconds. A change empties the cache." : "en secondes. Tout changement vide le cache.",
    "Directory Settings" : "Paramètres du dossier",
    "User Display Name Field" : "Champ \"nom d'affichage\" de l'utilisateur",
    "The LDAP attribute to use to generate the user's display name." : "L'attribut LDAP utilisé pour générer le nom d'affichage de l'utilisateur.",
    "2nd User Display Name Field" : "Second attribut pour le nom d'affichage",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Optionnel. Attribut LDAP à ajouter au nom d'affichage, entre parenthèses. Cela donnera par exemple : \"John Doe (john.doe@example.com)\".",
    "Base User Tree" : "DN racine de l'arbre utilisateurs",
    "One User Base DN per line" : "Un DN de base utilisateur par ligne",
    "User Search Attributes" : "Attributs de recherche utilisateurs",
    "Optional; one attribute per line" : "Optionnel, un attribut par ligne",
    "Group Display Name Field" : "Champ \"nom d'affichage\" du groupe",
    "The LDAP attribute to use to generate the groups's display name." : "L'attribut LDAP utilisé pour générer le nom d'affichage du groupe.",
    "Base Group Tree" : "DN racine de l'arbre groupes",
    "One Group Base DN per line" : "Un DN de base groupe par ligne",
    "Group Search Attributes" : "Attributs de recherche des groupes",
    "Group-Member association" : "Association groupe-membre",
    "Dynamic Group Member URL" : "Dynamic Group Member URL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "L'attribut LDAP des objets groupes qui contient l'URL de recherche LDAP déterminant quels objets appartiennent au groupe. (Un attribut vide désactive la fonctionnalité de groupes dynamiques)",
    "Nested Groups" : "Groupes imbriqués",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Si activé, les groupes contenant d'autres groupes sont pris en charge (fonctionne uniquement si l'attribut membre du groupe contient des DNs).",
    "Paging chunksize" : "Paging chunksize",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Chunksize utilisée pour les recherches LDAP paginées qui peuvent retourner des résultats par lots comme une énumération d'utilisateurs ou de groupes. (Configurer à 0 pour désactiver les recherches LDAP paginées)",
    "Enable LDAP password changes per user" : "Activer la modification du mot de passe LDAP par l'utilisateur",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Autoriser les utilisateurs LDAP à changer leurs mots de passe et permettre aux super administrateurs et aux administrateurs de groupe de modifier les mots de passe de leurs utilisateurs LDAP. Cela fonctionnera uniquement si les règles de contrôle d'accès sont configurées comme ceux du serveur LDAP. Puisque les mots de passe sont envoyés dans un texte en clair au serveur LDAP, le transport doit être chiffré et le hachage de mot de passe doit être configuré sur le serveur LDAP.",
    "(New password is sent as plain text to LDAP)" : "(Le nouveau mot de passe a été envoyé en tant que texte brut par LDAP)",
    "Default password policy DN" : "DN stratégie de mots de passe par défaut",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Le DN d'une stratégie de mot de passe par défaut qui sera utilisé pour la gestion d'expiration du mot de passe. Fonctionne seulement quand le changement du mot de passe LDAP par utilisateur est activé et est uniquement supporté par OpenLDAP. Laissez vide pour désactiver la gestion d'expiration du mot de passe.",
    "Special Attributes" : "Attributs spéciaux",
    "Quota Field" : "Champ du quota",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Laissez vide pour appliquer le quota par défaut de l'utilisateur. Sinon, spécifiez un attribut LDAP / AD.",
    "Quota Default" : "Quota par défaut",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Remplacez le quota par défaut des utilisateurs LDAP qui ne disposent pas d'un quota dans le champ Quota.",
    "Email Field" : "Champ E-mail",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Définissez le courrier électronique de l'utilisateur à partir de leur attribut LDAP. Laissez le champ vide pour appliquer le comportement par défaut.",
    "User Home Folder Naming Rule" : "Règle de nommage du répertoire utilisateur",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "Laisser vide pour le nom d’utilisateur (par défaut). Sinon, spécifiez un attribut LDAP/AD.",
    "\"$home\" Placeholder Field" : "\"$home\" Champ Placeholder",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "$home dans la configuration du stockage externe sera remplacé avec la valeur de l'attribut spécifié",
    "User Profile Attributes" : "Attributs du profil utilisateur",
    "Phone Field" : "Champ Téléphone",
    "User profile Phone will be set from the specified attribute" : "Le téléphone du profil utilisateur va être défini depuis l'attribut spécifié",
    "Website Field" : "Champ Site Web",
    "User profile Website will be set from the specified attribute" : "Le Site Web du profil utilisateur va être défini depuis l'attribut spécifié",
    "Address Field" : "Champ Adresse",
    "User profile Address will be set from the specified attribute" : "L'adresse du profil utilisateur va être défini depuis l'attribut spécifié",
    "Twitter Field" : "Champ Twitter",
    "User profile Twitter will be set from the specified attribute" : "Le twitter du profil utilisateur va être défini depuis l'attribut spécifié",
    "Fediverse Field" : "Champ Fediverse",
    "User profile Fediverse will be set from the specified attribute" : "Le Fediverse du profil utilisateur va être défini depuis l'attribut spécifié",
    "Organisation Field" : "Champ Organisation",
    "User profile Organisation will be set from the specified attribute" : "L'organisation du profil utilisateur va être défini depuis l'attribut spécifié",
    "Role Field" : "Champ Rôle",
    "User profile Role will be set from the specified attribute" : "Le rôle du profil utilisateur va être défini depuis l'attribut spécifié",
    "Headline Field" : "Champ Titre",
    "User profile Headline will be set from the specified attribute" : "Le titre du profil utilisateur va être défini depuis l'attribut spécifié",
    "Biography Field" : "Champ Biographie",
    "User profile Biography will be set from the specified attribute" : "La biographie du profil utilisateur va être défini depuis l'attribut spécifié",
    "Internal Username" : "Nom d'utilisateur interne",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "Par défaut le nom d'utilisateur interne sera créé à partir de l'attribut UUID. Cela permet de s'assurer que le nom d'utilisateur est unique et que les caractères n'ont pas besoin d'être convertis. Le nom d'utilisateur interne a pour restriction de ne contenir que les caractères suivants : [a-zA-Z0-9_.@-]. Les autres caractères sont remplacés par leurs correspondants ASCII ou simplement omis. En cas de collisions, un nombre sera ajouté/incrémenté. Le nom d'utilisateur interne est utilisé pour identifier un utilisateur en interne. C'est aussi le nom par défaut du dossier personnel de l'utilisateur. Il fait aussi partie des URLs distantes, pour tous les services DAV par exemple. Avec ce paramètre, le comportement par défaut peut être écrasé. Les modifications prendront effet seulement pour les nouveaux utilisateurs LDAP mappés (ajoutés). Laissez-le vide pour utiliser le comportement par défaut",
    "Internal Username Attribute:" : "Nom d'utilisateur interne :",
    "Override UUID detection" : "Passer outre la détection des UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Par défaut, l'attribut UUID est automatiquement  détecté. Cet attribut est utilisé pour identifier les utilisateurs et groupes de façon fiable. Un nom d'utilisateur interne basé sur l'UUID sera automatiquement créé, sauf s'il est spécifié autrement ci-dessus. Vous pouvez modifier ce comportement et définir l'attribut de votre choix. Vous devez alors vous assurer que l'attribut de votre choix peut être récupéré pour les utilisateurs ainsi que pour les groupes et qu'il soit unique. Laisser à blanc pour le comportement par défaut. Les modifications seront effectives uniquement pour les nouveaux (ajoutés) utilisateurs et groupes LDAP.",
    "UUID Attribute for Users:" : "Attribut UUID pour les Utilisateurs :",
    "UUID Attribute for Groups:" : "Attribut UUID pour les Groupes :",
    "Username-LDAP User Mapping" : "Association Nom d'utilisateur-Utilisateur LDAP",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Les noms d'utilisateurs sont utilisés pour le stockage et l'assignation de (meta) données. Pour identifier et reconnaître précisément les utilisateurs, chaque utilisateur LDAP aura un nom interne spécifique. Cela requiert l'association d'un nom d'utilisateur NextCloud à un nom d'utilisateur LDAP. Le nom d'utilisateur créé est associé à l'attribut UUID de l'utilisateur LDAP. Par ailleurs, le DN est mémorisé en cache pour limiter les interactions LDAP mais il n'est pas utilisé pour l'identification. Si le DN est modifié, ces modifications seront retrouvées. Seul le nom interne à NextCloud est utilisé au sein du produit. Supprimer les associations créera des orphelins et l'action affectera toutes les configurations LDAP. NE JAMAIS SUPPRIMER LES ASSOCIATIONS EN ENVIRONNEMENT DE PRODUCTION, mais uniquement sur des environnements de tests et d'expérimentations.",
    "Clear Username-LDAP User Mapping" : "Supprimer l'association utilisateur interne-utilisateur LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Supprimer l'association nom de groupe-groupe LDAP"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
