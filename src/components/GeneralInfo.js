import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import Fab from '@material-ui/core/Fab';


export default function GeneralInfo(props) {

  return (
    <div className='expandPanel'>
      <div className="expandPanel__drawer">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >
          Hey! Thank for jumping on the project. So for today we need to finish the Shareholders
          Document Analysis. I have left all the key points to consider in the tasks tab. 
          There are just two crucial.
          <Link>read more</Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="expandPanel__section">
       <Button 
         className='expandPanel__Btn'
       >
       <Avatar className='addBtn__avatar' variant="rounded">
         <AddIcon />
       </Avatar>
         Create a DELIVERABLE
       </Button>
       
      </div>
        <Fab
          onClick={()=> props.history.goBack()} // возврат на предыдущую страницу
          className='expendpanel__btn'
          position="fixed"
          aria-label="add"
          >
          <ReplyAllIcon edge="end"/>
        </Fab>
      </div>
    </div>
  );
}