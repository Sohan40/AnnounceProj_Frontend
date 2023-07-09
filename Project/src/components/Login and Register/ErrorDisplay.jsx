function ErrorDisplay({errors,name,typename='required',b="3px"})
{
    const styles={
        position: "relative",
        bottom:b,
        color:"red",
    }
    return (<>{errors[name]?.type === typename ?  <small className="valid" style={styles} ><i className="fa-solid fa-triangle-exclamation"></i> {name} is required</small> :<div style={{height:"22px"}}></div> }</>);
}

export default ErrorDisplay;