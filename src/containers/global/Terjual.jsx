import { useMediaQuery } from '@mui/material'
import CardProduk from '../web/CardProduk'
import CardPrdoukM from '../mobile/CardProdukM'
import NoData from './NoData'

const Terjual = () => {
    const box = []
    const isMobile = useMediaQuery('(max-width:425px)')
    return (
        <>
            {
                isMobile ? (
                    <>
                        {
                            box.length === 0 ? (
                                <NoData />
                            ) : (
                                <>
                                    <CardPrdoukM />
                                    <CardPrdoukM />
                                    <CardPrdoukM />

                                </>
                            )
                        }
                    </>
                ) : (
                    <>
                        {
                            box.length === 0 ? (
                                <NoData />
                            ) : (
                                <>
                                    <CardProduk />
                                    <CardProduk />
                                    <CardProduk />
                                    <CardProduk />
                                </>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default Terjual
