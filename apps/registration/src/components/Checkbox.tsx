
const Checkbox = ({
    obj,
    setObj,
    name,
}: {
    obj: boolean,
    setObj: any,
    name?: string

}) => {
    const handleChange = () => {
        setObj(!obj)

    }
    return (
        <div class="flex items-center mb-4">
            <input type="checkbox" class="w-5 h-5 text-emerald-700 bg-gray-100 rounded-full border-gray-300 focus:ring-emerald-700 focus:ring-2" />
                <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
        </div>
    );
}

export default Checkbox;