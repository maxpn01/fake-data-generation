import Region from "./Region";
import Errors from "./Errors";
import Seed from "./Seed";
import ExportBtn from "./ExportBtn";

const Header = () => {
    return (
        <header className="flex justify-between bg-zinc-300 px-16 py-3">
            <Region />
            <Errors />
            <Seed />
            <ExportBtn />
        </header>
    )
}

export default Header;