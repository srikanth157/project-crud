// import * as React from 'react';
// // import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//      'Asp.Net',
//      'PHP',
//      'Java',
//      'ReactJs',
//      'React Native',
//     'AngularJs',
//      'NodeJs',
//      'PWA',
//      'Flutter',
//      'VueJs',
//      'Vanilla Js',
//      'SQL Server',
//      'My SQL',
//      'MongoDB',
//      'HTML',
//     'CSS', 
//     'JavaScript/jQuery'
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function MultipleSelect() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl style={{margin:"20px 0 20px 0"}}  >
//         <InputLabel id="demo-multiple-name-label">Skill Set</InputLabel>
//         <Select
//           labelId="demo-multiple-name-label"
//           id="demo-multiple-name"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Name" />}
//           MenuProps={MenuProps}
//           style={{width:"450px"}}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
