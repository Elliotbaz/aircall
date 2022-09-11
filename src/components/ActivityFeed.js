import React, {useState, useEffect} from 'react';
import classes from './ActivityFeed.module.css';
import PhoneIcon from '../PhoneIcon';
import BinIcon from '../BinIcon';
import Menu from '../Menu'

const getActivityFeeds = "https://aircall-job.herokuapp.com/activities";
const getDetails = "https://aircall-job.herokuapp.com/activities/";
const updateAchieve = "https://aircall-job.herokuapp.com/activities/";
const resetCalls = "https://aircall-job.herokuapp.com/reset"

const ActivityFeed = (props) =>{
  const [activeFeeds, setActiveFeeds] = useState([])
  const [isDetails, setIsDetails] = useState(false)
  const [activeDetails, setActiveDetails] = useState({})
  const [isArchived, setIsArchived] = useState(false)
  useEffect(() => {
        fetch(getActivityFeeds)
          .then(response => response.json())
          .then(data => setActiveFeeds(data))
        }, [activeFeeds]);


    const getActivityDetailsHandler = (id) => {
            setIsDetails(true)
            fetch(getDetails+id)
            .then(response => response.json())
            .then(data => setActiveDetails(data))
        }

        const updateAchieveAllHandler = () => {
          setIsArchived(true)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_archived: true })
            };

            activeFeeds.map((call) => {
             fetch(updateAchieve+call.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                  setActiveFeeds([...activeFeeds, data])
                })
            })
        }

        const resetAllArchivedCalls = () =>{
          setIsArchived(false)
          fetch(resetCalls)
        }
        
        const archivedACallHandler = (id) =>{
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ is_archived: true })
        };   
         fetch(updateAchieve+id, requestOptions)
        .then(response => response.json())
        .then(data => {
              setActiveFeeds([...activeFeeds, data])
            })
        }
        
    

      return (<div>
       {!isArchived ? <>
       { !isDetails && <div className={classes.contactContainer}  style={{marginTop: "0px", padding: "5.5px", width: "50%" }} 
       onClick={()=>  updateAchieveAllHandler()}> 
       <span style={{fontWeight: "bold", marginLeft: "25px"}}>Achieve all calls</span>
        </div>}
        
        </> : <div className={classes.contactContainer} style={{marginTop: "0px", padding: "5.5px", width: "30%"}} 
       onClick={() => resetAllArchivedCalls()}> 
        <span style={{fontWeight: "bold", marginLeft: "25px"}}>Reset all calls</span>
        </div>}
        { !isDetails && <div className={classes.contactContainer}  style={{marginTop: "0px", padding: "5.5px", width: "50%" }} 
       onClick={()=>  console.log("This")}> 
        <BinIcon/> <span style={{fontWeight: "bold", marginLeft: "25px"}}>View all achieve calls</span>
        </div>}

        {!isDetails ? activeFeeds.map((calls) => <div key={calls.id} >  
        
        {!calls.is_archived && <div className={classes.activeFeedContainer} key={calls.id} 
        onClick={() => getActivityDetailsHandler(calls.id)}>
           <div className={classes.date}> {calls.created_at.split('T')[0]}</div>
            <div className={classes.contactContainer}> 
            <div><PhoneIcon/>
                <span className={classes.callsFrom}>
                    {calls.from}
                </span> 
                    <span className={classes.time}> <span className={classes.line}></span> 
                    {calls.created_at.split('T').pop().split('.')[0]}</span>
                    </div>
                    <div className={classes.triedToCall}>
                        tried to call on <span style={{fontWeight: "bold"}}>{calls.via}</span>
                    </div>
             </div>
            </div>}</div>)
             : 
            <div className={classes.detailsContainer}>
              <div className={classes.contactContainer} style={{marginTop: "0px", padding: "5.5px"}}
               onClick={() => setIsDetails(false)}> 
                   <span style={{fontWeight: "bold", marginLeft: "25px"}}>Back To Call Log</span>
              </div>
              <div className={classes.contactContainer}>
              <div className={classes.detailsContent} style={{textAlign: 'center'}}>
                <b>{activeDetails.call_type?.toUpperCase()} {activeDetails.call_type !== "voicemail" && "CALL"}</b></div>
                <div style={{marginBottom: "40px", float: "right"}} onClick={() => archivedACallHandler(activeDetails.id)}>  <BinIcon/> </div> <br/>
                <div className={classes.detailsContent}><b>From:</b> {activeDetails.from}</div>
                {activeDetails.to !== null && <div className={classes.detailsContent}><b>To:</b> {activeDetails.to}</div>}
                <div className={classes.detailsContent}><b>Time:</b> {activeDetails.created_at?.split('T')?.pop()?.split('.')[0]}</div>
                <div className={classes.detailsContent}><b>Date:</b> {activeDetails.created_at?.split('T')[0]}</div>
                <div className={classes.detailsContent}><b>Via:</b> {activeDetails.via}</div>
                <div className={classes.detailsContent}><b>Direction:</b> {activeDetails.direction}</div>
                </div>
            </div>
            }
            <Menu/>
      </div>)
}
export default ActivityFeed