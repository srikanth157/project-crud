import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import MultipleSelect from './multiple'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import { addProject, GetProjectById,EditProject} from './service/api'
import { useHistory,useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { compose } from '@mui/system'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const initialValues = {
  projectName: '',
  description: '',
}
const names = [
  'Asp.Net',
  'PHP',
  'Java',
  'ReactJs',
  'React Native',
  'AngularJs',
  'NodeJs',
  'PWA',
  'Flutter',
  'VueJs',
  'Vanilla Js',
  'SQL Server',
  'My SQL',
  'MongoDB',
  'HTML',
  'CSS',
  'JavaScript/jQuery',
]
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const AddProject = () => {
  const [name, setname] = useState('')
  const [desc, setdesc] = useState('')
  const [members, setmembers] = useState(1)
  const [check, setcheck] = useState(false)
  const [personName, setPersonName] = React.useState([])
  const theme = useTheme()
  const {_id} = useParams()

  const [project, setproject] = useState(initialValues)
  const { projectName, description } = project
  const history = useHistory()

  const handleChange = (event) => {
    if (event.target.name == 'name') {
      setname(event.target.value)
    } else if (event.target.name == 'description') {
      setdesc(event.target.value)
    } else if (event.target.name == 'members') {
      setmembers(event.target.value)
    } else if (event.target.name == 'checkbox') {
      setcheck(!check)
    } else if (event.target.name == 'multiple') {
      setPersonName(
        typeof event.target.value === 'string'
          ? event.target.value.split(',')
          : event.target.value
      )
    }
  }

  const addProjects = async () => {
    let project = {
      projectName: name,
      description: desc,
      skillset: personName.toString(),
      NoOfMembers: members,
      isActive: check,
    }
    if (_id) {
      const res = await EditProject(_id, project)
      console.log(res)
    }
    else {
      const res = await addProject(project)
    }
  }

  const Projects = () => {
    history.push('./')
  }
  const getProjectById = async () => {
    if (_id) {
      try { 
        const res = await GetProjectById(_id)
        setcheck(res.data.isActive)
        setname(res.data.projectName) 
        setdesc(res.data.description)
        setmembers(res.data.NoOfMembers)
        setPersonName(res.data.skillset.split(','))
      }
      catch (err) {
        console.log(err)
      }
     } 
  }
  useEffect(() => {
    getProjectById()
  }, [])

  return (
    <FormGroup style={{ width: '75vw', alignItems: 'center' }}>
      <Typography style={{ fontSize: '20px', marginTop: '30px' }}>
        Add Project
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Name"
          name="name"
          value={name}
          style={{ width: '450px' }}
          onChange={handleChange}
          required
        />
      </Box>

      <TextField
        label="description"
        multiline
        style={{ width: '450px' }}
        value={desc}
        name="description"
        onChange={handleChange}
      />
      {/* <MultipleSelect/> */}
      
      <FormControl style={{ margin: '20px 0 20px 0' }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          name="multiple"
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          style={{ width: '450px' }}
          placeholder="Select Skills"
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label">No Of Members</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={members}
            name="members"
            style={{ width: '450px' }}
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ display: 'flex' }}>
        <label style={{ margin: '10px' }} htmlFor="checkbox">
          Is Active
        </label>
        <Checkbox
          onChange={handleChange}
          name="checkbox"
          checked={check}
          inputProps={{'aria-label':'controlled'}}
          {...label}
        />
      </div>

      <div style={{ display: 'flex' }}>
        <FormControl>
          <Button
            style={{ margin: '20px' }}
            color="primary"
            variant="contained"
            onClick={() => addProjects()}
          >
            Save
          </Button>
        </FormControl>
        <FormControl>
          <Button
            style={{ margin: '20px' }}
            color="secondary"
            variant="contained"
            onClick={() => Projects()}
          >
            Back
          </Button>
        </FormControl>
      </div>
    </FormGroup>
  )
}

export default AddProject
