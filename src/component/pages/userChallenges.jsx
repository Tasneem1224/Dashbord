import "./userChallengesS.css";

export default UserChallenges;

function UserChallenges(){
    return( <>
     
            <div className="body">

                <h1>User Challenges</h1>

              
                        <div className="con">

                        <br/>
                            <form className="form">
                                <label>Challenges Name</label>
                                <br/>
                                <input className="in1" type="text"></input>
                                <br/>
                                <label>Brief</label>
                                <br/>
                                <textarea className="ta1"></textarea>
                                <br/>
                                <label>Day 1</label>
                                <br/>
                                <textarea className="ta1"></textarea>
                                <br/>
                                <label>Day 2</label>
                                <br/>
                                <textarea className="ta1"></textarea>
                                

                            </form>
                        </div>
               
            </div>

 
        </>
    )
}
