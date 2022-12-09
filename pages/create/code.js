import CreateMyCode from "../../components/Create/Code"
import useLoadingPageSettings from "../../hooks/useLoadingPageSettings"

const CreateMyCodePage = () => {
    // loading page settings
    const { loading: loadingPage } = useLoadingPageSettings()

    if(loadingPage) return null

    return (
        <CreateMyCode />
    )
}

export default CreateMyCodePage