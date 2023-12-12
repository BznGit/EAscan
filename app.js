const apiScanStarter = require('./backend/src/apiScan');
const MainApp = require('./backend/src/server');
const mainApp= new MainApp();
mainApp.start();
apiScanStarter();