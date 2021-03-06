/**Shorter version of the election dataset for a piechart, shortened by cutting off the years
 Number of parliament seats over the years for each political party
 Data collected from: http://en.wikipedia.org/wiki/List_of_Canadian_federal_general_elections*/
var dataset = [
    [62,95,129,63,73,80,90,117,128,137,133,132,82,118,100,116,90,173,179,118,191,169,104,48,116,128,131,154,109,141,114,147,40,83,177,155,172,135,103,77,34],
    [100,100,65,134,134,124,118,86,79,75,85,85,153,49,115,91,134,39,39,66,41,51,111,208,99,95,97,72,107,95,136,103,211,169,2,20,12,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,17,21,22,31,16,26,32,30,43,9,21,13,19,29,37,103],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,58,22,11,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,28,13,23,25,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,10,13,10,15,19,0,30,24,14,14,15,11,6,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,12,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,60,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,66,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,99,124,143,166],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,2,4,3,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,44,38,54,51,49,4],
    [0,5,12,9,4,11,7,10,6,2,3,4,0,7,6,7,7,5,6,20,6,6,6,1,1,1,2,2,2,1,0,0,1,0,1,1,0,0,1,2,1]
];

var totals = [180,200,206,206,211,215,215,213,213,214,221,221,235,235,245,245,245,245,245,245,262,265,265,265,265,265,265,264,264,264,282,282,282,295,295,301,301,307,308,308,308];

//Generate data for the piechart
//Format of array:
// pieDataset = ["clusterLabel":name, "values":[list of all values, one per view]
var data = [];
var parties = ["Liberal","Progressive Conservative","New Democrats","Progressive","Cooperative Commonwealth Federation","Anti Confederate","Social Credit",
    "United Farmers","Reform","Canadian Alliance","Conservative","Liberal Progressive","Bloq Quebecois","Other"];
//Initiliaze general information for all clusters
for (var j=0;j<parties.length;j++){
    data[j] = {"label":parties[j],"values":[]};
}
//Now, update the piedataset to contain percentages, using the totals array
for (var j=0;j<data.length;j++){
    for (var k=23;k<totals.length;k++){
        data[j].values.push(dataset[j][k]/totals[k]);
    }
}
var labels = ["1962","1963","1965","1968","1972","1974","1979","1980","1984","1988","1993","1997","2000","2004","2006","2008","2011"];



