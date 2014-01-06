var vm = require('vm');
if (!vm.Script.createContext)
  vm.Script.createContext = vm.createContext;
