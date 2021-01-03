const builder = require('electron-builder')
const path = require('path')
const Platform = builder.Platform.WINDOWS

builder
  .build({
    targets: Platform.createTarget(),
    config: {
      appId: 'com.ISEC.app',
      productName: 'userDriver',
      directories: {
        output: './win-build',
      },
      extraResources: ['./lib/**'],
      win: {
        icon: './assets/img/login.ico',
        artifactName: 'userDriver',
        // target: 'msi',
        target: [
          {
            target: 'msi',
          },
        ],
        requestedExecutionLevel: 'requireAdministrator',
        // compression: 'maximum',
      },
      // nsis: {
      //   oneClick: false,
      //   allowElevation: true,
      //   perMachine: true,
      //   allowToChangeInstallationDirectory: true,
      //   createDesktopShortcut: true,
      //   createStartMenuShortcut: true,
      //   // shortcutName: 'userDriver',
      //   // artifactName: 'userDriver',
      //   // deleteAppDataOnUninstall: true,
      //   // uninstallDisplayName: 'uninstall userDriver',
      //   // differentialPackage: true,
      //   // displayLanguageSelector: true,
      //   // installerLanguages: [`ar-EG`],
      //   // language: `3073`,
      //   // multiLanguageInstaller: true,
      //   // runAfterFinish: true,
      //   // installerIcon: path.resolve('./assets/img/login.ico'),
      //   // uninstallerIcon: path.resolve('./assets/img/login.ico'),
      //   // installerHeaderIcon: path.resolve('./assets/img/login.ico'),
      //   // installerHeader: path.resolve('./assets/img/login.ico'),
      // },
      msi: {
        oneClick: false,
        perMachine: false,
        createStartMenuShortcut: true,
      },
      appx: {
        showNameOnTiles: true,
      },
    },
  })
  .then(() => {
    // handle result
    console.log('build done')
  })
  .catch((error) => {
    // handle error
    console.log(error, 'error')
  })
