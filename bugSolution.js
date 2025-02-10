// bug.js
import nonExistentModule from 'nonExistentModule'; // This will cause the error

console.log(nonExistentModule);

// bugSolution.js
expo install react-native-vector-icons; // install the module

import Icon from 'react-native-vector-icons/FontAwesome'; // Correct import path

// Use the module
<Icon name="user" size={30} color="#900" /> 