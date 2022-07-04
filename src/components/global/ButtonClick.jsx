import { Button } from "@mui/material"

const ButtonClick = ({ title, primary, onClick, disabled }) => {
    return (
        <>
            {primary ? (
                <Button variant='contained' onClick={onClick} fullWidth size="large" sx={{
                    marginTop: "1rem",
                    // padding: '1rem',
                    borderRadius: '1rem',
                    backgroundColor: '#7126B5',
                    boxShadow: 'none'
                }}>
                    {title}
                </Button>
            ) : (
                <>
                    {disabled ? (
                        <Button variant='contained' onClick={onClick} disabled fullWidth size="large" sx={{
                            marginTop: "1rem",
                            // padding: '1rem',
                            borderRadius: '1rem',
                            backgroundColor: '#7126B5',
                            boxShadow: 'none',
                            '&:disabled': {
                                color: '#fff',
                            }
                        }} >
                            {title}
                        </Button>
                    ) : (
                        <Button variant='contained' color='secondary' onClick={onClick} fullWidth size="large" sx={{
                            marginTop: "1rem",
                            // padding: '1rem',
                            borderRadius: '1rem',
                            border: '1.1px solid #7126B5 ',
                            backgroundColor: 'transparent',
                            boxShadow: 'none'
                        }}>
                            {title}
                        </Button>
                    )}
                </>
            )}
        </>
    )
}

export default ButtonClick
