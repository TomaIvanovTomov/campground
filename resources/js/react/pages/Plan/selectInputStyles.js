export default {
    container: (base) => ({
        ...base,
        marginBottom: 30
    }),

    menu: () => ({
        width: '100%',
        textAlign: 'left',
        backgroundColor: '#FFFFFF'
    }),

    control: () => ({
        backgroundColor: '#ffffff',
        border: '1px solid var(--fourth)',
        fontWeight: 600,
        fontSize: 17,
        display: 'flex',
        justifyContent: 'space-between',
        color: '#FDF8F4',
        height: 70,
        padding: 20,
        alignItems: 'center',
        paddingLeft: 50
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
        padding: 20
    })
}
