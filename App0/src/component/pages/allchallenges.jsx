import React, { useState } from "react";
import "./allchallengesS.css";

export default function AllChallenges() {
  // حالة لإدارة قائمة التحديات
  const [challenges, setChallenges] = useState([
    { id: 1, name: "Sport" },
    { id: 2, name: "Music" },
    { id: 3, name: "Coding" },
    { id: 4, name: "Reading" }
  ]);

  // دالة لحذف التحدي
  const deleteChallenge = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  return (
    <>
      <div className="bodyc">
        <h1>All Challenges</h1>
        <br />

        <div className="all">
          <table className="allt">
            <thead>
              <tr>
                <th className="ti">Challenge name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((challenge) => (
                <React.Fragment key={challenge.id}>
                  <tr>
                    <td className="alln">{challenge.name}</td>
                    <td>
                      <button
                        className="dbu"
                        onClick={() => deleteChallenge(challenge.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button className="ubu">Update</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr className="hrall" />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
