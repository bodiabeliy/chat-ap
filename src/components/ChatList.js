import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

const messages = [
  {
    id: 1,
    primary: 'Anna Petrenko',
    secondary: "Hey! What about deadline?",
    person: './images/Anna.jpg',
  },
  {
    id: 2,
    primary: 'Nick Konstantinov',
    secondary: `Hey! Thank for jumping on the project. So for today we need to finish the Shareholders 
    Document Analysis. I have left all the key points to consider in the tasks tab.
    There are just two crucial points to consider..`,
    person: './images/Mihael.jpg',
  },
  {
    id: 3,
    primary: 'Anna Petrenko',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: './images/Mary.jpg',
  },
  {
    id: 4,
    primary: 'Mary Salen',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Mihael Shamon",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: './images/Mihael.jpg',
  },  {
    id: 6,
    primary: 'Anna Petrenko',
    secondary: "Hey! What about deadline?",
    person: './images/Anna.jpg',
  },
  {
    id: 7,
    primary: 'Nick Konstantinov',
    secondary: `Hey! Thank for jumping on the project. So for today we need to finish the Shareholders 
    Document Analysis. I have left all the key points to consider in the tasks tab.
    There are just two crucial points to consider..`,
    person: './images/Mihael.jpg',
  },
  {
    id: 8,
    primary: 'Anna Petrenko',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: './images/Mary.jpg',
  },
  {
    id: 9,
    primary: 'Mary Salen',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 10,
    primary: "Mihael Shamon",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: './images/Mihael.jpg',
  }
];



export default function BottomAppBar() {


  return (
    <div className='commentList'>
    <React.Fragment>
      <CssBaseline />
      <Paper square>
        <Typography className='listContainer' variant="h5" gutterBottom component="div">
         <b> Comments {messages.length}</b>
        </Typography>
        <List>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              {id === 5 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  12.09.2020
                </ListSubheader>
              )}
              {id === 7 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  11.09.2020
                </ListSubheader>
              )}

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" variant="rounded" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
    </div>
  );
}