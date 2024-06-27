import AutoCompleteSearch from "react-google-autocomplete"
const GoogleAutoCompleteSearch = () => (
  <div className="flex justify-center h-[200px] items-center ">
    <div className="w-[600px] flex flex-col gap-2">
      <div className="text-sm font-medium">Google autocomplete search</div>
      <AutoCompleteSearch
        className="h-10 border border-gray-400 rounded-lg w-1/2
        text-sm font-medium
        "
        apiKey={"api-key"}
        onPlaceSelected={(place) => console.log(place)}
      />
    </div>
  </div>
)
export default GoogleAutoCompleteSearch
