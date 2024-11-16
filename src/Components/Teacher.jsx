import PropTypes from "prop-types"
const Teacher = ({ name, image, role, dept }) => {
    return (
        <div style={{ border: "1px solid black", borderRadius: "4px", display: "inline-block" }}>
            <img src={image} alt={name} />
            <h2>{role}</h2>
            <h3>{dept}</h3>
        </div >
    )
}
Teacher.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    dept: PropTypes.string
}
export default Teacher;