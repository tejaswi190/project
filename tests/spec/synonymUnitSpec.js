
var cleanData = '[{"word":"daybreak","score":106006,"tags":["syn","n","adv","adj"]},{"word":"dawn","score":104382,"tags":["syn","n"]},{"word":"sunrise","score":104345,"tags":["syn","n"]},{"word":"forenoon","score":103266,"tags":["syn","n"]},{"word":"sunup","score":99814,"tags":["syn","n"]},{"word":"good morning","score":95682,"tags":["syn","n"]},{"word":"dawning","score":93876,"tags":["syn","n","v"]},{"word":"aurora","score":93767,"tags":["syn","n"]},{"word":"dayspring","score":93445,"tags":["syn","n"]},{"word":"antemeridian","score":90849,"tags":["syn","adj"]},{"word":"break of day","score":90849,"tags":["syn","n"]},{"word":"break of the day","score":90849,"tags":["syn","n"]},{"word":"cockcrow","score":90849,"tags":["syn","n"]},{"word":"first light","score":90849,"tags":["syn","n"]},{"word":"morning time","score":90849,"tags":["syn","n"]},{"word":"afternoon","score":90848,"tags":["n","adj"]},{"word":"evening","score":85304,"tags":["n","v"]},{"word":"night","score":83064,"tags":["n"]},{"word":"day","score":81771,"tags":["n","adj"]},{"word":"noon","score":79046,"tags":["n"]},{"word":"tomorrow","score":77860,"tags":["n","adv"]},{"word":"today","score":77021,"tags":["n","adj"]},{"word":"hour","score":76476,"tags":["n"]},{"word":"breakfast","score":75101,"tags":["n","adv"]},{"word":"days","score":74454,"tags":["n"]},{"word":"early","score":74313,"tags":["adj","adv","n"]},{"word":"eve","score":71197,"tags":["n"]},{"word":"daylight","score":70670,"tags":["n","adv"]},{"word":"earlier","score":70453,"tags":["adv","adj"]},{"word":"matinee","score":69099,"tags":["n"]},{"word":"quarterbacking","score":67677,"tags":["n"]},{"word":"hello","score":67608,"tags":["n"]},{"word":"bonjour","score":66861,"tags":["n"]},{"word":"cheerio","score":66747,"tags":["n"]},{"word":"bye","score":66722,"tags":["n"]},{"word":"back","score":66691,"tags":["adv"]},{"word":"blow","score":66431,"tags":["n"]},{"word":"hallo","score":66368,"tags":["n"]},{"word":"baltimore","score":66319,"tags":["n","prop"]},{"word":"awakening","score":66248,"tags":["n","v"]},{"word":"howdy","score":65646,"tags":["n"]},{"word":"first","score":64567,"tags":["adj","adv"]},{"word":"wound","score":64334,"tags":["n"]},{"word":"butt","score":64272,"tags":["n"]},{"word":"hey","score":64238,"tags":["n","prop"]},{"word":"matin","score":64219,"tags":["n"]},{"word":"hola","score":63728,"tags":["n"]},{"word":"greetings","score":63607,"tags":["n"]},{"word":"mat","score":63403,"tags":["n"]},{"word":"hiya","score":63380,"tags":["n"]},{"word":"chant","score":63267,"tags":["n"]},{"word":"chen","score":63061,"tags":["n","prop"]},{"word":"sabah","score":62946,"tags":["n","prop"]},{"word":"walrus","score":62707,"tags":["n"]},{"word":"future","score":62487,"tags":["n"]},{"word":"check-in","score":61852,"tags":["n"]},{"word":"kch","score":61852,"tags":["n","prop"]},{"word":"matinée","score":61852,"tags":["n"]},{"word":"mañana","score":61852,"tags":["n"]},{"word":"alba","score":61851,"tags":["n"]},{"word":"rch","score":61851,"tags":["n"]},{"word":"midday","score":61849,"tags":["n"]},{"word":"midmorning","score":61847,"tags":["n"]},{"word":"lunchtime","score":61846,"tags":["n"]},{"word":"yesterday","score":61845,"tags":["n","adv","adj"]},{"word":"midafternoon","score":61843,"tags":["n"]},{"word":"midnight","score":61841,"tags":["n"]},{"word":"monday","score":61839,"tags":["n","adj","prop"]},{"word":"thursday","score":61838,"tags":["n","adj","prop"]},{"word":"friday","score":61837,"tags":["n","adj","prop"]},{"word":"predawn","score":61836,"tags":["n"]},{"word":"weekday","score":61834,"tags":["n","adj"]},{"word":"noontime","score":61831,"tags":["n"]},{"word":"sunday","score":61830,"tags":["n","adj","prop"]},{"word":"wednesday","score":61828,"tags":["n","adj","prop"]},{"word":"tonight","score":61827,"tags":["n","adv"]},{"word":"tuesday","score":61826,"tags":["n","adj","prop"]},{"word":"saturday","score":61823,"tags":["n","adj","prop"]},{"word":"wake","score":61822,"tags":["n","v"]},{"word":"lunch","score":61821,"tags":["n"]},{"word":"nap","score":61820,"tags":["n"]},{"word":"noonday","score":61819,"tags":["n"]},{"word":"week","score":61818,"tags":["n"]},{"word":"amorwe","score":61817,"tags":["n"]},{"word":"weekend","score":61816,"tags":["n"]},{"word":"hours","score":61815,"tags":["n"]},{"word":"yestermorn","score":61814,"tags":["n"]},{"word":"tomorn","score":61813,"tags":["n"]},{"word":"ante meridiem","score":61812,"tags":["n"]},{"word":"overmorrow","score":61811,"tags":["n"]},{"word":"post meridiem","score":61810,"tags":["n"]},{"word":"undermeal","score":61809,"tags":["n"]},{"word":"yesternoon","score":61808,"tags":["n"]},{"word":"month","score":61807,"tags":["n"]},{"word":"noonstead","score":61806,"tags":["n"]},{"word":"nudiustertian","score":61805,"tags":["n"]},{"word":"nychthemeron","score":61804,"tags":["n"]},{"word":"session","score":61802,"tags":["n"]},{"word":"noctidial","score":61801,"tags":["n"]},{"word":"pip emma","score":61800,"tags":["n","prop"]}]';
var faultyData = '[word:"daybreak","score":106006,"tags":["syn","n","adv","adj"]}]';
var emptySearch="";
var invalidTerm = "Aerplane123$%^&";
var validTerm1 = "Ring the bells";
var validTerm2 = "Water"; 
beforeEach(function() {
    synonymPlugin = new SynonymPlugin();
});

describe("Search Term Validity Tests", function() {
	it("Should accept proper single word search", function() {
	    synonymPlugin.onsubmit(validTerm2);
	    expect(synonymPlugin.canCallFetch).toEqual(true);
	});
	it("Should accept words separated by space", function() {
	    synonymPlugin.onsubmit(validTerm1);
	    expect(synonymPlugin.canCallFetch).toEqual(true);
	});
	it("Should accept only alphabets and space as search terms", function() {
	    synonymPlugin.onsubmit(invalidTerm);
	    expect(synonymPlugin.canCallFetch).toEqual(false);
	});
	it("Should handle empty search term scenario", function() {
	    expect(function() {
		    synonymPlugin.onsubmit(emptySearch);
	  	}).toThrowError("search text cannot be empty");
	});
});

describe("Data Append Tests", function() {
	it("Should have data ready to append when proper response received from API", function() {
	    synonymPlugin.populateSynonymsResults(JSON.parse(cleanData));
	    expect(synonymPlugin.hasDataReady).toEqual(true);
	});

	it("Handle zero results", function() {
		expect(function() {
		    synonymPlugin.populateSynonymsResults([]);
	  	}).toThrowError("No results found");
	});

	it("Handle faulty data from API", function() {
		expect(function() {
		    synonymPlugin.populateSynonymsResults(void 0);
	  	}).toThrowError("Invalid response format from Server");
	});
});

