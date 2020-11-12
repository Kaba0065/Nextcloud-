<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitFiles_Sharing
{
    public static $prefixLengthsPsr4 = array (
        'O' =>
        array (
            'OCA\\Files_Sharing\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Files_Sharing\\' =>
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\Files_Sharing\\Activity\\Filter' => __DIR__ . '/..' . '/../lib/Activity/Filter.php',
        'OCA\\Files_Sharing\\Activity\\Providers\\Base' => __DIR__ . '/..' . '/../lib/Activity/Providers/Base.php',
        'OCA\\Files_Sharing\\Activity\\Providers\\Downloads' => __DIR__ . '/..' . '/../lib/Activity/Providers/Downloads.php',
        'OCA\\Files_Sharing\\Activity\\Providers\\Groups' => __DIR__ . '/..' . '/../lib/Activity/Providers/Groups.php',
        'OCA\\Files_Sharing\\Activity\\Providers\\PublicLinks' => __DIR__ . '/..' . '/../lib/Activity/Providers/PublicLinks.php',
        'OCA\\Files_Sharing\\Activity\\Providers\\RemoteShares' => __DIR__ . '/..' . '/../lib/Activity/Providers/RemoteShares.php',
        'OCA\\Files_Sharing\\Activity\\Providers\\Users' => __DIR__ . '/..' . '/../lib/Activity/Providers/Users.php',
        'OCA\\Files_Sharing\\Activity\\Settings\\PublicLinks' => __DIR__ . '/..' . '/../lib/Activity/Settings/PublicLinks.php',
        'OCA\\Files_Sharing\\Activity\\Settings\\RemoteShare' => __DIR__ . '/..' . '/../lib/Activity/Settings/RemoteShare.php',
        'OCA\\Files_Sharing\\Activity\\Settings\\ShareActivitySettings' => __DIR__ . '/..' . '/../lib/Activity/Settings/ShareActivitySettings.php',
        'OCA\\Files_Sharing\\Activity\\Settings\\Shared' => __DIR__ . '/..' . '/../lib/Activity/Settings/Shared.php',
        'OCA\\Files_Sharing\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\Files_Sharing\\BackgroundJob\\FederatedSharesDiscoverJob' => __DIR__ . '/..' . '/../lib/BackgroundJob/FederatedSharesDiscoverJob.php',
        'OCA\\Files_Sharing\\BackgroundJob\\CleanupRemoteStoragesJob' => __DIR__ . '/..' . '/../lib/BackgroundJob/CleanupRemoteStoragesJob.php',
        'OCA\\Files_Sharing\\Cache' => __DIR__ . '/..' . '/../lib/Cache.php',
        'OCA\\Files_Sharing\\Capabilities' => __DIR__ . '/..' . '/../lib/Capabilities.php',
        'OCA\\Files_Sharing\\Collaboration\\ShareRecipientSorter' => __DIR__ . '/..' . '/../lib/Collaboration/ShareRecipientSorter.php',
        'OCA\\Files_Sharing\\Command\\CleanupRemoteStorages' => __DIR__ . '/..' . '/../lib/Command/CleanupRemoteStorages.php',
        'OCA\\Files_Sharing\\Command\\ExiprationNotification' => __DIR__ . '/..' . '/../lib/Command/ExiprationNotification.php',
        'OCA\\Files_Sharing\\Controller\\AcceptController' => __DIR__ . '/..' . '/../lib/Controller/AcceptController.php',
        'OCA\\Files_Sharing\\Controller\\DeletedShareAPIController' => __DIR__ . '/..' . '/../lib/Controller/DeletedShareAPIController.php',
        'OCA\\Files_Sharing\\Controller\\ExternalSharesController' => __DIR__ . '/..' . '/../lib/Controller/ExternalSharesController.php',
        'OCA\\Files_Sharing\\Controller\\PublicPreviewController' => __DIR__ . '/..' . '/../lib/Controller/PublicPreviewController.php',
        'OCA\\Files_Sharing\\Controller\\RemoteController' => __DIR__ . '/..' . '/../lib/Controller/RemoteController.php',
        'OCA\\Files_Sharing\\Controller\\SettingsController' => __DIR__ . '/..' . '/../lib/Controller/SettingsController.php',
        'OCA\\Files_Sharing\\Controller\\ShareAPIController' => __DIR__ . '/..' . '/../lib/Controller/ShareAPIController.php',
        'OCA\\Files_Sharing\\Controller\\ShareController' => __DIR__ . '/..' . '/../lib/Controller/ShareController.php',
        'OCA\\Files_Sharing\\Controller\\ShareInfoController' => __DIR__ . '/..' . '/../lib/Controller/ShareInfoController.php',
        'OCA\\Files_Sharing\\Controller\\ShareesAPIController' => __DIR__ . '/..' . '/../lib/Controller/ShareesAPIController.php',
        'OCA\\Files_Sharing\\DeleteOrphanedSharesJob' => __DIR__ . '/..' . '/../lib/DeleteOrphanedSharesJob.php',
        'OCA\\Files_Sharing\\Event\\BeforeTemplateRenderedEvent' => __DIR__ . '/..' . '/../lib/Event/BeforeTemplateRenderedEvent.php',
        'OCA\\Files_Sharing\\Event\\ShareLinkAccessedEvent' => __DIR__ . '/..' . '/../lib/Event/ShareLinkAccessedEvent.php',
        'OCA\\Files_Sharing\\Event\\ShareMountedEvent' => __DIR__ . '/..' . '/../lib/Event/ShareMountedEvent.php',
        'OCA\\Files_Sharing\\Exceptions\\BrokenPath' => __DIR__ . '/..' . '/../lib/Exceptions/BrokenPath.php',
        'OCA\\Files_Sharing\\Exceptions\\S2SException' => __DIR__ . '/..' . '/../lib/Exceptions/S2SException.php',
        'OCA\\Files_Sharing\\Exceptions\\SharingRightsException' => __DIR__ . '/..' . '/../lib/Exceptions/SharingRightsException.php',
        'OCA\\Files_Sharing\\ExpireSharesJob' => __DIR__ . '/..' . '/../lib/ExpireSharesJob.php',
        'OCA\\Files_Sharing\\External\\Cache' => __DIR__ . '/..' . '/../lib/External/Cache.php',
        'OCA\\Files_Sharing\\External\\Manager' => __DIR__ . '/..' . '/../lib/External/Manager.php',
        'OCA\\Files_Sharing\\External\\Mount' => __DIR__ . '/..' . '/../lib/External/Mount.php',
        'OCA\\Files_Sharing\\External\\MountProvider' => __DIR__ . '/..' . '/../lib/External/MountProvider.php',
        'OCA\\Files_Sharing\\External\\Scanner' => __DIR__ . '/..' . '/../lib/External/Scanner.php',
        'OCA\\Files_Sharing\\External\\Storage' => __DIR__ . '/..' . '/../lib/External/Storage.php',
        'OCA\\Files_Sharing\\External\\Watcher' => __DIR__ . '/..' . '/../lib/External/Watcher.php',
        'OCA\\Files_Sharing\\Helper' => __DIR__ . '/..' . '/../lib/Helper.php',
        'OCA\\Files_Sharing\\Hooks' => __DIR__ . '/..' . '/../lib/Hooks.php',
        'OCA\\Files_Sharing\\ISharedStorage' => __DIR__ . '/..' . '/../lib/ISharedStorage.php',
        'OCA\\Files_Sharing\\Listener\\LegacyBeforeTemplateRenderedListener' => __DIR__ . '/..' . '/../lib/Listener/LegacyBeforeTemplateRenderedListener.php',
        'OCA\\Files_Sharing\\Listener\\LoadAdditionalListener' => __DIR__ . '/..' . '/../lib/Listener/LoadAdditionalListener.php',
        'OCA\\Files_Sharing\\Listener\\LoadSidebarListener' => __DIR__ . '/..' . '/../lib/Listener/LoadSidebarListener.php',
        'OCA\\Files_Sharing\\Listener\\ShareInteractionListener' => __DIR__ . '/..' . '/../lib/Listener/ShareInteractionListener.php',
        'OCA\\Files_Sharing\\Listener\\UserAddedToGroupListener' => __DIR__ . '/..' . '/../lib/Listener/UserAddedToGroupListener.php',
        'OCA\\Files_Sharing\\Listener\\UserShareAcceptanceListener' => __DIR__ . '/..' . '/../lib/Listener/UserShareAcceptanceListener.php',
        'OCA\\Files_Sharing\\Middleware\\OCSShareAPIMiddleware' => __DIR__ . '/..' . '/../lib/Middleware/OCSShareAPIMiddleware.php',
        'OCA\\Files_Sharing\\Middleware\\ShareInfoMiddleware' => __DIR__ . '/..' . '/../lib/Middleware/ShareInfoMiddleware.php',
        'OCA\\Files_Sharing\\Middleware\\SharingCheckMiddleware' => __DIR__ . '/..' . '/../lib/Middleware/SharingCheckMiddleware.php',
        'OCA\\Files_Sharing\\Migration\\OwncloudGuestShareType' => __DIR__ . '/..' . '/../lib/Migration/OwncloudGuestShareType.php',
        'OCA\\Files_Sharing\\Migration\\SetAcceptedStatus' => __DIR__ . '/..' . '/../lib/Migration/SetAcceptedStatus.php',
        'OCA\\Files_Sharing\\Migration\\SetPasswordColumn' => __DIR__ . '/..' . '/../lib/Migration/SetPasswordColumn.php',
        'OCA\\Files_Sharing\\Migration\\Version11300Date20201120141438' => __DIR__ . '/..' . '/../lib/Migration/Version11300Date20201120141438.php',
        'OCA\\Files_Sharing\\Migration\\Version21000Date20201223143245' => __DIR__ . '/..' . '/../lib/Migration/Version21000Date20201223143245.php',
        'OCA\\Files_Sharing\\Migration\\Version22000Date20210216084241' => __DIR__ . '/..' . '/../lib/Migration/Version22000Date20210216084241.php',
        'OCA\\Files_Sharing\\Migration\\Version24000Date20220208195521' => __DIR__ . '/..' . '/../lib/Migration/Version24000Date20220208195521.php',
        'OCA\\Files_Sharing\\Migration\\Version24000Date20220404142216' => __DIR__ . '/..' . '/../lib/Migration/Version24000Date20220404142216.php',
        'OCA\\Files_Sharing\\MountProvider' => __DIR__ . '/..' . '/../lib/MountProvider.php',
        'OCA\\Files_Sharing\\Notification\\Listener' => __DIR__ . '/..' . '/../lib/Notification/Listener.php',
        'OCA\\Files_Sharing\\Notification\\Notifier' => __DIR__ . '/..' . '/../lib/Notification/Notifier.php',
        'OCA\\Files_Sharing\\Scanner' => __DIR__ . '/..' . '/../lib/Scanner.php',
        'OCA\\Files_Sharing\\Settings\\Personal' => __DIR__ . '/..' . '/../lib/Settings/Personal.php',
        'OCA\\Files_Sharing\\ShareBackend\\File' => __DIR__ . '/..' . '/../lib/ShareBackend/File.php',
        'OCA\\Files_Sharing\\ShareBackend\\Folder' => __DIR__ . '/..' . '/../lib/ShareBackend/Folder.php',
        'OCA\\Files_Sharing\\SharedMount' => __DIR__ . '/..' . '/../lib/SharedMount.php',
        'OCA\\Files_Sharing\\SharedStorage' => __DIR__ . '/..' . '/../lib/SharedStorage.php',
        'OCA\\Files_Sharing\\Updater' => __DIR__ . '/..' . '/../lib/Updater.php',
        'OCA\\Files_Sharing\\ViewOnly' => __DIR__ . '/..' . '/../lib/ViewOnly.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitFiles_Sharing::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitFiles_Sharing::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitFiles_Sharing::$classMap;

        }, null, ClassLoader::class);
    }
}
