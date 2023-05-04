OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "清除映射失敗。",
    "Failed to delete the server configuration" : "刪除伺服器設定失敗",
    "Invalid configuration: Anonymous binding is not allowed." : "無效的設定：不允許匿名綁定。",
    "Valid configuration, connection established!" : "有效的設定，連線已建立！",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "有效的設定，但是綁定失敗。請檢查伺服器設定和證書。",
    "Invalid configuration. Please have a look at the logs for further details." : "無效的設定。請檢查紀錄檔以取得更多詳細資訊。",
    "No action specified" : "未指定動作",
    "No configuration specified" : "未指定設定",
    "No data specified" : "未指定資料",
    "Invalid data specified" : "指定了無效的資料",
    " Could not set configuration %s" : "無法設定 %s",
    "Action does not exist" : "動作不存在",
    "Renewing …" : "正在更新……",
    "Very weak password" : "密碼安全性極弱",
    "Weak password" : "密碼安全性弱",
    "So-so password" : "密碼安全性普通",
    "Good password" : "密碼安全性佳",
    "Strong password" : "密碼安全性極佳",
    "The Base DN appears to be wrong" : "Base DN 出現問題",
    "Testing configuration…" : "正在測試設定……",
    "Configuration incorrect" : "設定不正確",
    "Configuration incomplete" : "設定未完成",
    "Configuration OK" : "設定完成",
    "Select groups" : "選擇群組",
    "Select object classes" : "選擇物件",
    "Please check the credentials, they seem to be wrong." : "請檢查您的憑證，它們似乎是錯的。",
    "Please specify the port, it could not be auto-detected." : "請指定連接埠，其無法自動偵測。",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "無法自動偵測 Base DN，請修改憑證、主機與連接埠。",
    "Could not detect Base DN, please enter it manually." : "偵測不到 Base DN，請手動輸入。",
    "{nthServer}. Server" : "{nthServer}. 伺服器",
    "No object found in the given Base DN. Please revise." : "在 Base DN 中找不到物件。請修改",
    "More than 1,000 directory entries available." : "超過 1,000 個目錄項目可用。",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["提供的 Base DN 中有 {objectsFound} 個項目"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "遇到錯誤。請檢查 Base DN、連線設定與憑證。",
    "Do you really want to delete the current Server Configuration?" : "您真的要刪除現在的伺服器設定嗎？",
    "Confirm Deletion" : "確認刪除",
    "Mappings cleared successfully!" : "映射清除成功！",
    "Error while clearing the mappings." : "清除映射時發生錯誤。",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "不允許匿名綁定。請提供使用者 DN 與密碼。",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP 操作錯誤。可能不允許匿名綁定。",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "儲存失敗。請確保資料庫可以運作。繼續前請重新載入。",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "切換模式將會啟用自動 LDAP 查詢。取決於您的 LDAP 大小，可能需要一些時間。您仍然想要切換模式嗎？",
    "Mode switch" : "模式切換",
    "Select attributes" : "選擇屬性",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "找不到使用者。請檢查您的登入資料與使用者名稱。有效的過濾條件（複製貼上以進行命令列驗證）：<br/>",
    "User found and settings verified." : "使用者存在，設定值正確。",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "考慮縮小範圍，因為其涵蓋了許多使用者，但只有第一個才能登入。",
    "An unspecified error occurred. Please check log and settings." : "發生不明錯誤。請檢查紀錄檔與設定。",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "搜尋過濾條件無效，可能是語法問題引起的，如括號不對稱等。請修改。",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "發生 LDAP/AD 的連線錯誤。請檢查主機、連接埠與憑證。",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "「%uid」佔位字串遺失。查詢 LDAP/AD 時將會使用登入名稱取代。",
    "Please provide a login name to test against" : "請提供登入名稱以便再次測試",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "因為 LDAP/AD 伺服器不支援 memberOf，所以停用群組盒。",
    "Password change rejected. Hint: " : "密碼變更被拒絕。提示：",
    "Please login with the new password" : "請以新密碼登入",
    "LDAP User backend" : "LDAP 使用者後端",
    "Your password will expire tomorrow." : "您的密碼將於明天到期。",
    "Your password will expire today." : "您的密碼將於今天到期。",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["您的密碼將於%n天後到期。"],
    "LDAP/AD integration" : "LDAP/AD 整合",
    "_%n group found_::_%n groups found_" : ["找到 %n 個群組"],
    "> 1000 groups found" : "找到 > 1000 個群組",
    "> 1000 users found" : "找到 > 1000 個使用者",
    "_%n user found_::_%n users found_" : ["找到 %n 個使用者"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "偵測不到使用者顯示名稱屬性。請在進階 LDAP 設定中自行指定。",
    "Could not find the desired feature" : "找不到所需的功能",
    "Invalid Host" : "無效的主機",
    "LDAP user and group backend" : "LDAP 使用者與群組後端",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "此應用程式讓管理員可以將 Nextcloud 連線到以 LDAP 為基礎的使用者目錄。",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "此應用程式讓管理員可以將 Nextcloud 連線到以 LDAP 為基礎的使用者目錄來進行驗證與提供使用者、群組與使用者屬性。管理員可以設定此應用程式來連線到一個或更多個 LDAP 目錄，或是透過 LDAP 介面的 Active Directories。如使用者配額、電子郵件、大頭照圖片、群組成員資格等屬性可以透過有適當查詢與過濾條件的目錄從 Nextcloud 拉取。\n\n使用者以其 LDAP 或 AD 憑證登入 Nextcloud，並根據 LDAP 或 AD 伺服器處理的身份驗證請求來授予存取權限。Nextcloud 並不儲存 LDAP 或 AD 的密碼，而是使用這些憑證來對使用者進行身份驗證，然後 Nextcloud 會使用工作階段作為使用者 ID。更多資訊在 LDAP 使用者與群組後端文件中提供。",
    "Test Configuration" : "測試設定",
    "Help" : "說明",
    "Groups meeting these criteria are available in %s:" : "符合這些條件的群組可在 %s 找到：",
    "Only these object classes:" : "只有這些物件類別：",
    "Only from these groups:" : "僅從這些群組：",
    "Search groups" : "搜尋群組",
    "Available groups" : "可用的群組",
    "Selected groups" : "已選擇的群組",
    "Edit LDAP Query" : "編輯 LDAP 查詢",
    "LDAP Filter:" : "LDAP 過濾條件：",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "過濾條件指定哪些 LDAP 群組有存取 %s 的權限。",
    "Verify settings and count the groups" : "驗證設定並計算群組",
    "When logging in, %s will find the user based on the following attributes:" : "登入時，%s 將會根據以下屬性尋找使用者：",
    "LDAP/AD Username:" : "LDAP/AD 使用者名稱：",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "允許使用 LDAP/AD 使用者名稱登入，可以是 \"uid\" 或 \"sAMAccountName\"。",
    "LDAP/AD Email Address:" : "LDAP/AD 電子郵件地址：",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "允許使用電子郵件屬性登入。允許使用 “mail” 與 “mailPrimaryAddress”。",
    "Other Attributes:" : "其他屬性:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "定義要套用的過濾條件，試圖登入時。\"%%uid\" 會在登入動作時取代使用者名稱。範例：\"uid=%%uid\"",
    "Test Loginname" : "測試登入名稱",
    "Attempts to receive a DN for the given loginname and the current login filter" : "嘗試接收指定登入名稱與目前登入過濾條件的 DN",
    "Verify settings" : "驗證設定",
    "%s. Server:" : "%s. 伺服器：",
    "Add a new configuration" : "建立一個新的設定",
    "Copy current configuration into new directory binding" : "複製目前的設定檔到新目錄綁定",
    "Delete the current configuration" : "刪除目前的設定檔",
    "Host" : "主機",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "除非您需要 SSL，否則您可以忽略通訊協定，反之則請以 ldaps:// 開頭",
    "Port" : "連接埠",
    "Detect Port" : "偵測連接阜",
    "User DN" : "使用者 DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "客戶端使用者的 DN 與特定字詞的連結需要完善，例如：uid=agent,dc=example,dc=com。若是匿名存取，則將 DN 與密碼欄位留空。",
    "Password" : "密碼",
    "For anonymous access, leave DN and Password empty." : "匿名存取時請將 DN 與密碼欄位留空。",
    "Save Credentials" : "儲存憑證",
    "One Base DN per line" : "一行一個 Base DN",
    "You can specify Base DN for users and groups in the Advanced tab" : "您可以在「進階」分頁中為使用者與群組指定 Base DN",
    "Detect Base DN" : "偵測 Base DN",
    "Test Base DN" : "測試 Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "避免自動 LDAP 請求。適合較大規模的安裝，但需要一些 LDAP 知識。",
    "Manually enter LDAP filters (recommended for large directories)" : "手動輸入 LDAP 過濾條件（建議用於大型目錄）",
    "Listing and searching for users is constrained by these criteria:" : "列出和搜索用戶受到以下條件的約束：",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "使用者最常見的物件類別是 organizationalPerson、person、user 與 inetOrgPerson。如果不確定要選取哪個物件類別，請諮詢您的目錄管理員。",
    "The filter specifies which LDAP users shall have access to the %s instance." : "過濾條件指定哪些 LDAP 使用者有存取 %s 的權限。",
    "Verify settings and count users" : "驗證設定並計算使用者數",
    "Saving" : "儲存",
    "Back" : "返回",
    "Continue" : "繼續",
    "Please renew your password." : "請更新您的密碼",
    "An internal error occurred." : "發生內部錯誤。",
    "Please try again or contact your administrator." : "請重試或聯絡您的系統管理員。",
    "Current password" : "目前密碼",
    "New password" : "新密碼",
    "Renew password" : "更新密碼",
    "Wrong password." : "密碼錯誤",
    "Cancel" : "取消",
    "Server" : "伺服器",
    "Users" : "使用者",
    "Login Attributes" : "登入屬性",
    "Groups" : "群組",
    "Expert" : "專家",
    "Advanced" : "進階",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>警告：</b>未安裝 PHP LDAP 模組，後端系統將無法運作。請要求您的系統管理員安裝它。",
    "Connection Settings" : "連線設定",
    "Configuration Active" : "設定作用中",
    "When unchecked, this configuration will be skipped." : "沒有被勾選時，此設定會被略過。",
    "Backup (Replica) Host" : "備用（複本）主機",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "提供可選的備用主機。其必須為主要 LDAP/AD 伺服器的複本。",
    "Backup (Replica) Port" : "備用（複本）連接埠",
    "Disable Main Server" : "停用主伺服器",
    "Only connect to the replica server." : "僅連線至複本伺服器。",
    "Turn off SSL certificate validation." : "關閉 SSL 憑證檢查。",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "不建議，請僅在測試時使用！如果連線只能在此設定下運作，請匯入 LDAP 伺服器的 SSL 憑證到您的伺服器 %s 上。",
    "Cache Time-To-Live" : "快取的存活時間",
    "in seconds. A change empties the cache." : "以秒為單位。變更後會清空快取。",
    "Directory Settings" : "目錄設定",
    "User Display Name Field" : "使用者顯示名稱欄位",
    "The LDAP attribute to use to generate the user's display name." : "用於生成使用者顯示名稱的 LDAP 屬性。",
    "2nd User Display Name Field" : "第二個使用者顯示名稱欄位",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "選填。要加進顯示名稱中括號的 LDAP 屬性。例如 »John Doe (john.doe@example.org)«。",
    "Base User Tree" : "Base User Tree",
    "One User Base DN per line" : "一行一個使用者 Base DN",
    "User Search Attributes" : "User Search Attributes",
    "Optional; one attribute per line" : "非必要，一行一項屬性",
    "Group Display Name Field" : "群組顯示名稱欄位",
    "The LDAP attribute to use to generate the groups's display name." : "用於生成群組顯示名稱的 LDAP 屬性。",
    "Base Group Tree" : "Base Group Tree",
    "One Group Base DN per line" : "一行一個 Group Base DN",
    "Group Search Attributes" : "Group Search Attributes",
    "Group-Member association" : "Group-Member association",
    "Dynamic Group Member URL" : "Dynamic Group Member URL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "群組物件上的 LDAP 屬性包含了一個 LDAP 搜尋 URL，該 URL 決定了哪些物件屬於群組。（空白設定將會停用動態群組成員資格功能。）",
    "Nested Groups" : "Nested Groups",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "啟用後，將會支援包含群組的群組。（僅在群組成員屬性包含 DN 時可正常運作。）",
    "Paging chunksize" : "分頁區塊大小",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "分頁 LDAP 搜尋使用的區塊大小可能會回傳大量結果，如使用者或群組列舉。（在這種情況下，將其設定為 0 將會停用分頁 LDAP 搜尋。）",
    "Enable LDAP password changes per user" : "啟用每個使用者的 LDAP 密碼",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "允許 LDAP 使用者變更他們的密碼，並允許超級管理員與群組管理員變更其 LDAP 使用者的密碼。僅當在 LDAP 伺服器上設定了對應的存取控制策略時，此選項才會有效。因為密碼以明文形式傳送到 LDAP 伺服器，因此必須使用傳輸加密，且必須在 LDAP 伺服器上設定密碼雜湊。",
    "(New password is sent as plain text to LDAP)" : "（新密碼會以明文傳送給 LDAP）",
    "Default password policy DN" : "預設密碼策略 DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "預設密碼策略的 DN，其將用於密碼過期處理。僅當啟用了每個使用者的 LDAP 密碼變更且 OpenLDAP 支援時才能正常運作。保留為空將停用密碼過期處理。",
    "Special Attributes" : "特殊屬性",
    "Quota Field" : "配額欄位",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "留空將以使用者的預設配額為準。否則請指定 LDAP/AD 屬性。",
    "Quota Default" : "預設配額",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "覆寫沒有在配額欄位中設定配額的 LDAP 使用者的預設配額。",
    "Email Field" : "電子郵件欄位",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "從 LDAP 屬性設定使用者的電子郵件。將其留空為預設行為。",
    "User Home Folder Naming Rule" : "使用者家目錄的命名規則",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "使用者名稱留空（預設值）。否則請指定 LDAP/AD 屬性。",
    "\"$home\" Placeholder Field" : "\"$home\" 佔位字串欄位",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "外部儲存空間設定中的 $home 將會以指定屬性的值取代",
    "User Profile Attributes" : "使用者個人資料屬性",
    "Phone Field" : "電話號碼欄位",
    "User profile Phone will be set from the specified attribute" : "使用者個人資料電話號碼將從指定的屬性設定",
    "Website Field" : "網站欄位",
    "User profile Website will be set from the specified attribute" : "使用者個人資料網站將從指定的屬性設定",
    "Address Field" : "地址欄位",
    "User profile Address will be set from the specified attribute" : "使用者個人資料地址將從指定的屬性設定",
    "Twitter Field" : "Twitter 欄位",
    "User profile Twitter will be set from the specified attribute" : "使用者個人資料 Twitter 將從指定的屬性設定",
    "Fediverse Field" : "Fediverse 欄位",
    "User profile Fediverse will be set from the specified attribute" : "使用者個人資料 Fediverse 將從指定的屬性設定",
    "Organisation Field" : "組織欄位",
    "User profile Organisation will be set from the specified attribute" : "使用者個人資料組織將從指定的屬性設定",
    "Role Field" : "職稱欄位",
    "User profile Role will be set from the specified attribute" : "使用者個人資料職稱將從指定的屬性設定",
    "Headline Field" : "標題欄位",
    "User profile Headline will be set from the specified attribute" : "使用者個人資料標題將從指定的屬性設定",
    "Biography Field" : "傳記欄位",
    "User profile Biography will be set from the specified attribute" : "使用者個人資料傳記將從指定的屬性設定",
    "Internal Username" : "內部使用者名稱",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "預設情況下，內部使用者名稱將從 UUID 屬性建立。其確保了使用者名稱是唯一且不需要轉換字元。內部使用者名稱的限制是只能使用下列字元：[a-zA-Z0-9_.@-]。其他字元會使用其 ASCII 對映或被忽略。發生碰撞時，將會加入數字。內部使用者名稱用於內部識別使用者。其也是使用者家資料夾的預設名稱。也是遠端 URL 的一部分，舉例來說，會用於所有 DAV 服務。使用此設定，預設的行為將會被覆寫。變更僅對新映射（新增）的 LDAP 使用者有效。將其留空會使用預設行為。",
    "Internal Username Attribute:" : "內部使用者名稱屬性：",
    "Override UUID detection" : "偵測覆寫 UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "預設情況下，UUID 屬性會自動偵測。UUID 屬性用來準確識別 LDAP 使用者及群組。此外，如果未在上方指定，內部使用者名稱會以 UUID 為基礎建立。您能覆寫設定並直接指定屬性，但一定要確保指定的屬性能被使用者及群組取得且唯一。留空則執行預設行為。變更只會對新映射（新增）的 LDAP 使用者及群組生效。",
    "UUID Attribute for Users:" : "使用者的 UUID 屬性：",
    "UUID Attribute for Groups:" : "群組的 UUID 屬性：",
    "Username-LDAP User Mapping" : "使用者-LDAP 使用者映射",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "使用者名稱用於儲存並指派詮釋資料。為了精確識別並認出使用者，每個 LDAP 使用者都將會有內部使用者名稱。這需要從使用者名稱到 LDAP 使用者的映射。已建立的使用者名稱會映射到 LDAP 使用者的 UUID。另外，DN 會被快取以減少 LDAP 互動，但不會用於識別。若 DN 變更，將會找到變更。內部使用者名稱將會全面使用。清除映射將會讓到處都是未連結的項目。清除映射對設定並不敏感，其會影響到所有 LDAP 設定！不要在生產環境中清除映射，僅將其用於測試或實驗階段。",
    "Clear Username-LDAP User Mapping" : "清除使用者名稱-LDAP 使用者映射",
    "Clear Groupname-LDAP Group Mapping" : "清除群組名稱-LDAP 群組映射",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "預設情況下，內部使用者名稱將從 UUID 屬性建立。其確保了使用者名稱是唯一且不需要轉換字元。內部使用者名稱的限制是只能使用下列字元：[a-zA-Z0-9_.@-]。其他字元會使用其 ASCII 對映或被忽略。發生碰撞時，將會加入數字。內部使用者名稱用於內部識別使用者。其也是使用者家資料夾的預設名稱。也是遠端 URL 的一部分，舉例來說，會用於所有 *DAV 服務。使用此設定，預設的行為將會被覆寫。變更僅對新映射（新增）的 LDAP 使用者有效。將其留空會使用預設行為。"
},
"nplurals=1; plural=0;");
