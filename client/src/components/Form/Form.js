import React from "react";
import "./styles.css";


const Form = () => {
    return (
        <form autocomplete="off" className="form">
            <h4 className="title">Create a memory</h4>
           <div className="ip-group">
               <input type="text" placeholder=" " id="creator" className="ip"/>
               <label className="ip-label" htmlFor="creator">Creator</label> 
           </div>
           <div className="ip-group">
               <input type="text" placeholder=" " id="title" className="ip"/>
               <label className="ip-label" htmlFor="title">Title</label> 
           </div>
           <div className="ip-group">
               <textarea id="message" className="ip text-area" placeholder=" " rows="5" cols="10" maxlength="200"></textarea>
               <label className="ip-label" htmlFor="message">message</label> 
           </div>
           <div className="ip-group">
               <input type="file" id="file" accept="image/*" className="ip-file"/>
               <label className="file-label" htmlFor="file"><i className="fas fa-2x fa-image"></i><span>Photo</span></label>
           </div>
           <div className="ip-btns">
               <button className="submit">Post</button>
               <button className="clear">Clear</button>
           </div>
        </form>
    )
}


export default Form;