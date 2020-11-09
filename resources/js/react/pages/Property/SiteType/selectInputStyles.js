export default {
    container: (base) => ({
        ...base
    }),

    menu: () => ({
        width: '100%',
        textAlign: 'left',
        backgroundColor: '#FFFFFF'
    }),
  
    control: () => ({
        width: 200,
        marginTop: 0,
        margin: 'auto',
        backgroundColor: '#ffffff',
        border: '1px solid var(--fourth)',
        fontWeight: 600,
        fontSize: 17,
        display: 'flex',
        justifyContent: 'space-between',
        color: '#FDF8F4',
        height: 60,
        padding: 10,
        alignItems: 'center',                
        paddingRight: 50
    }),

    singleValue: () => ({
        color: '#333C39'
    }),

    placeholder: () => ({
        color: '#333C39'
    }),

    indicatorsContainer: () => ({
        display: 'none'
    }),

    menuList: () => ({
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--fourth)',
        width: 200,
        margin: 'auto',
        zIndex: '1000',
        top: 65,
        left: 0
    }),

    option: (provided, state) => ({
        backgroundColor: state.isFocused ? '#c7c7c7' : 'transparent',
        padding: 20
    })
  }