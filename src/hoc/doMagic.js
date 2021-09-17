const doMagic = (InputComponent) => {

    const Component = (props) => {
        const style = {
            backgroundColor: 'blue'
        };
        return <div><InputComponent bgColorStyle={ style } { ...props } /></div>
    };
   
    return Component;
};

export default doMagic;
