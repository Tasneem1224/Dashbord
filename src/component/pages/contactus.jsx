import "./contactusS.css";

export default ContactUs;

function ContactUs() {
  return (
    <>
      <div className="bodyc">
        <h1>Contact Us</h1>

        <div className="con">
          <br />
          <form className="form">
            <label className="lus">Name</label>

            <input className="in1" type="text"></input>

            <label className="lus">Email</label>

            <input className="in1" type="text"></input>

            <label className="lus">Your message to us</label>

            <textarea className="ta1"></textarea>
            <br />
            <button className="sbu">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
