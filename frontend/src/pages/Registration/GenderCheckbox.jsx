import "./GenderCheckbox.css";

const GenderCheckbox = () => {
    return(
        <div className="genderCheckboxMain">
            <div>
                <label className="genderCheckboxLabel">
                    <span>Male</span>
                    <input type="radio" name="gender" className="genderCheckboxElement" id="male" value="male"></input>
                </label>
            </div>
            <div>
                <label className="genderCheckboxLabel">
                    <span>Female</span>
                    <input type="radio" name="gender" className="genderCheckboxElement" id="female" value="female"></input>
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox;