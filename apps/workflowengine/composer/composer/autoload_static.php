<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitWorkflowEngine
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\WorkflowEngine\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\WorkflowEngine\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\WorkflowEngine\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\WorkflowEngine\\BackgroundJobs\\Rotate' => __DIR__ . '/..' . '/../lib/BackgroundJobs/Rotate.php',
        'OCA\\WorkflowEngine\\Check\\AbstractStringCheck' => __DIR__ . '/..' . '/../lib/Check/AbstractStringCheck.php',
        'OCA\\WorkflowEngine\\Check\\FileMimeType' => __DIR__ . '/..' . '/../lib/Check/FileMimeType.php',
        'OCA\\WorkflowEngine\\Check\\FileName' => __DIR__ . '/..' . '/../lib/Check/FileName.php',
        'OCA\\WorkflowEngine\\Check\\FileSize' => __DIR__ . '/..' . '/../lib/Check/FileSize.php',
        'OCA\\WorkflowEngine\\Check\\FileSystemTags' => __DIR__ . '/..' . '/../lib/Check/FileSystemTags.php',
        'OCA\\WorkflowEngine\\Check\\RequestRemoteAddress' => __DIR__ . '/..' . '/../lib/Check/RequestRemoteAddress.php',
        'OCA\\WorkflowEngine\\Check\\RequestTime' => __DIR__ . '/..' . '/../lib/Check/RequestTime.php',
        'OCA\\WorkflowEngine\\Check\\RequestURL' => __DIR__ . '/..' . '/../lib/Check/RequestURL.php',
        'OCA\\WorkflowEngine\\Check\\RequestUserAgent' => __DIR__ . '/..' . '/../lib/Check/RequestUserAgent.php',
        'OCA\\WorkflowEngine\\Check\\TFileCheck' => __DIR__ . '/..' . '/../lib/Check/TFileCheck.php',
        'OCA\\WorkflowEngine\\Check\\UserGroupMembership' => __DIR__ . '/..' . '/../lib/Check/UserGroupMembership.php',
        'OCA\\WorkflowEngine\\Check\\MfaVerified' => __DIR__ . '/..' . '/../lib/Check/MfaVerified.php',
        'OCA\\WorkflowEngine\\Command\\Index' => __DIR__ . '/..' . '/../lib/Command/Index.php',
        'OCA\\WorkflowEngine\\Controller\\AWorkflowController' => __DIR__ . '/..' . '/../lib/Controller/AWorkflowController.php',
        'OCA\\WorkflowEngine\\Controller\\GlobalWorkflowsController' => __DIR__ . '/..' . '/../lib/Controller/GlobalWorkflowsController.php',
        'OCA\\WorkflowEngine\\Controller\\RequestTimeController' => __DIR__ . '/..' . '/../lib/Controller/RequestTimeController.php',
        'OCA\\WorkflowEngine\\Controller\\UserWorkflowsController' => __DIR__ . '/..' . '/../lib/Controller/UserWorkflowsController.php',
        'OCA\\WorkflowEngine\\Entity\\File' => __DIR__ . '/..' . '/../lib/Entity/File.php',
        'OCA\\WorkflowEngine\\Helper\\LogContext' => __DIR__ . '/..' . '/../lib/Helper/LogContext.php',
        'OCA\\WorkflowEngine\\Helper\\ScopeContext' => __DIR__ . '/..' . '/../lib/Helper/ScopeContext.php',
        'OCA\\WorkflowEngine\\Listener\\LoadAdditionalSettingsScriptsListener' => __DIR__ . '/..' . '/../lib/Listener/LoadAdditionalSettingsScriptsListener.php',
        'OCA\\WorkflowEngine\\Manager' => __DIR__ . '/..' . '/../lib/Manager.php',
        'OCA\\WorkflowEngine\\Migration\\PopulateNewlyIntroducedDatabaseFields' => __DIR__ . '/..' . '/../lib/Migration/PopulateNewlyIntroducedDatabaseFields.php',
        'OCA\\WorkflowEngine\\Migration\\Version2000Date20190808074233' => __DIR__ . '/..' . '/../lib/Migration/Version2000Date20190808074233.php',
        'OCA\\WorkflowEngine\\Migration\\Version2200Date20210805101925' => __DIR__ . '/..' . '/../lib/Migration/Version2200Date20210805101925.php',
        'OCA\\WorkflowEngine\\Service\\Logger' => __DIR__ . '/..' . '/../lib/Service/Logger.php',
        'OCA\\WorkflowEngine\\Service\\RuleMatcher' => __DIR__ . '/..' . '/../lib/Service/RuleMatcher.php',
        'OCA\\WorkflowEngine\\Settings\\ASettings' => __DIR__ . '/..' . '/../lib/Settings/ASettings.php',
        'OCA\\WorkflowEngine\\Settings\\Admin' => __DIR__ . '/..' . '/../lib/Settings/Admin.php',
        'OCA\\WorkflowEngine\\Settings\\Personal' => __DIR__ . '/..' . '/../lib/Settings/Personal.php',
        'OCA\\WorkflowEngine\\Settings\\Section' => __DIR__ . '/..' . '/../lib/Settings/Section.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitWorkflowEngine::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitWorkflowEngine::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitWorkflowEngine::$classMap;

        }, null, ClassLoader::class);
    }
}
