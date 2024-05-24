import "./dashbordS.css";

export default DashBord;

function DashBord() {
  return (
    <>
      <div className="body">
        <div className="da">
          <h2>dashboard</h2>

          <ul>
            <li>
              <a href="AllChallenges">All Challenges</a>
            </li>
            <hr className="hr" />

            <li>
              <a href="AddChallenges">Add Challenges</a>
            </li>
            <hr className="hr" />
            <li>
              <a href="UserChallenges">User Challenges</a>
            </li>
            <hr className="hr" />
            <li>
              <a href="AddProblem">All feeling</a>
            </li>
            <hr className="hr" />
            <li>
              <a href="AddProblem">Add feeling</a>
            </li>
            <hr className="hr" />
            <li>
              <a href="Comments">Comments</a>
            </li>
            <hr className="hr" />
            <li>
              <a href="Evaluation">Evaluation</a>
            </li>
            <hr className="hr" />
           
          </ul>
        </div>
      </div>
    </>
  );
}
