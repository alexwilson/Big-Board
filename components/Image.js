export default function Image(props) {
    const {src, ...other} = props
    return (<img {...other}
        src={`https://responsiveimages.io/v1/images/${encodeURIComponent(src)}`}
    />)
}