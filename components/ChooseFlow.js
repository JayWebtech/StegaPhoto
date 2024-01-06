import FormRadio from "./FormRadio";

const ChooseFlow = ({ onChoice }) => (
    <fieldset form="form" className="grid gap-4 mb-10">
        <p className="mb-4 text-xl">I would like to</p>
        <FormRadio
            name="chooseFlow"
            value="hide"
            label="Encode files inside an image"
            onChange={onChoice}
            defaultChecked
        />
        <FormRadio
            name="chooseFlow"
            value="find"
            label="Decode files from an image"
            onChange={onChoice}
        />
    </fieldset>
);

export default ChooseFlow;
