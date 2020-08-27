export default {
    container: (base) => ({
        ...base,
        marginBottom: 30
    }),

    menu: () => ({
        width: '100%',
        textAlign: 'left'
    }),
  
    control: () => ({
        display: 'flex',
        justifyContent: 'space-between',
        color: '#FDF8F4',
        height: 60,
        padding: 20,
        alignItems: 'center',
        borderRadius: 8,
        border: 1,
        borderStyle: 'solid',
        borderColor: '#cccccc',
        marginTop: 10,
        marginBottom: 40
    }),

    input: () => ({
        color: '#2d364c',
        marginTop: 30
    }),

    singleValue: () => ({
        color: '#333C39',
        fontSize: 18,
        fontWeight: 700
    }),

    placeholder: () => ({
        color: '#333C39'
    }),

    indicatorsContainer: () => ({
        display: 'none'
    }),

    menuList: () => ({
        position: 'absolute',
        backgroundColor: '#FDF8F4',
        width: '100%',
        zIndex: '1000',
        top: 65
    }),

    option: (provided, state) => ({
        backgroundColor: state.isFocused ? '#c7c7c7' : 'transparent',
        padding: 20,
        color: '#333C39',
        fontSize: 18,
        fontWeight: 700
    })
  }