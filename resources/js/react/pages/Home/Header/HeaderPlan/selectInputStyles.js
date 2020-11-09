export default {
    container: (base) => ({
        ...base,
        zIndex: '1000',
    }),

    menu: () => ({
        width: '100%',
        textAlign: 'left',
        backgroundColor: '#FFFFFF',
        zIndex: 200
    }),
  
    control: () => ({
        backgroundColor: '#ffffff',
        fontWeight: 600,
        fontSize: 17,
        display: 'flex',
        justifyContent: 'space-between',
        color: '#333C39',
        height: 70,
        padding: 20,
        alignItems: 'center',
        width: 310
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
        width: '100%',
        zIndex: '1000',
        top: 65
    }),

    option: (provided, state) => ({
        backgroundColor: state.isFocused ? '#c7c7c7' : 'transparent',
        color: '#333C39',
        padding: 20,        
        zIndex: 200
    })
  }