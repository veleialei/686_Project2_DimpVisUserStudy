/**Dataset from gapminder.org:
 * y-axis: total internet users
 * x-position: Income per person (GDP/capita, PPP$ Inflation-adjusted)
 * For a selected group of world countries, over twenty years (1990-2010)
 * Lots of missing data but no stationary cases
 * */
/**var data = [
    //["Australia",100028.6872,190042.6593,310055.097,350047.4499,400033.1244,500005.6849,600013.8871,3032448.684,5772822.817,7727668.143,8960506.11,10212332.68,"missing","missing","missing",12854217.6,13691234.7,14667831.67,15418952.64,16262457.75,16923971.84,23151.89034,22893.85675,23424.76683,24053.10102,24780.17241,25518.71544,26151.13247,26997.93657,28169.15341,28983.2672,29241.5145,30043.24277,30687.75473,31634.24243,32098.50615,32798,33204.15573,34196.81242,34444.33306,34389.09927,34884.76376],
    ["Australia",100028.6872,190042.6593,310055.097,350047.4499,400033.1244,500005.6849,600013.8871,3032448.684,5772822.817,7727668.143,8960506.11,10212332.68,1000,1000,1000,12854217.6,13691234.7,14667831.67,15418952.64,16262457.75,16923971.84,23151.89034,22893.85675,23424.76683,24053.10102,24780.17241,25518.71544,26151.13247,26997.93657,28169.15341,28983.2672,29241.5145,30043.24277,30687.75473,31634.24243,32098.50615,32798,33204.15573,34196.81242,34444.33306,34389.09927,34884.76376],

    ["Brazil",0,"5002.849364","20012.60461","40028.64295","60049.75548",170164.1922,740838.3146,1311723.746,2503663.726,3505320.092,5007203.697,8009871.983,16403933.51,23989344.64,35071405.33,39099569.36,52963579.27,58609644.02,64799077.08,75791320.44,79245740.06,7136.93246,7097.834885,6950.283021,7188.190188,7503.673809,7713.353209,7810.201008,7957.980824,7860.552246,7818.961728,8056.060915,8022.523305,8131.212843,8110.411789,8461.498669,8596,8842.429401,9290.118627,9681.548355,9564.568719,10195.44815],
    ["Canada",100000,"160003.0915","260011.862","340021.5353","690036.061",1220000,1999829.101,4499135.148,7497596.156,10994823.89,15732358.25,18642276.07,19267447.73,20292696.8,21068712.44,23134293.76,23622656.07,24139408.49,25562540.72,27041384.74,27757539.89,27387.27394,26491.59562,26342.88426,26590.39937,27543.90811,27969.67291,28074.83649,28954.92589,29837.45806,31154.85646,32448.60764,32570.56646,33328.96507,33635.25438,34346.96551,35078,35644.47329,36002.32901,35978.20955,34545.50306,35219.34297],
    ["China",0,"missing","missing","2005.081341","14035.15972",60149.50994,160399.1262,400999.741,2105102.278,8919464.192,22538411.74,33732185.84,59097714.83,80190592.55,94940305.78,111449553.6,138335407.2,211437109.6,300190268.4,385788649,460077957.1,1647.382397,1732.133712,1877.413138,2035.594573,2214.196284,2521.341661,2546.439875,2653.300577,2635.55228,2784.394684,3012.123972,3309.79598,3695.649982,4228.975907,4551.126044,4909.2,5502.395991,6249.291445,6816.668675,7408.620677,8143.482408],
    ["Finland",20000,"69999.97205","94999.98113","129999.9486","250000",710000,860008.5578,1000031.718,1311065.668,1667071.049,1927000.745,2235090.679,3244677.512,3606773.859,3783149.901,3905985.922,4194844.618,4273610.162,4448176.658,4406241.295,4661254.019,23180.78249,21581.74989,20647.16499,20294.8084,21005.54254,21650.14541,22402.49628,23723.9502,25004.32237,25915.26438,27171.96611,27825.5291,28204.59057,28650.02742,29651.4045,30469,31684.20267,33226.46458,33162.40273,30188.47491,31053.39703],
    ["France",29929.40697,"79803.35015","159587.3165","339087.812","518583.7347",947462.4102,1500227.336,2479408.585,3696826.482,5361267.71,8448513.599,15635143.67,18039953.46,21750455.68,23723604.53,26149202.12,28767899.07,40807003.5,43891158.31,44697966.37,50292729.03,24676.73365,24847.92991,25140.91756,24731.22336,25117.84711,25556.85006,25717.19837,26170.74527,26957.91867,27689.4593,28636.15436,28983.72202,29043.35181,29048.87772,29505.88006,29644,30159.67962,30652.66305,30459.72132,29345.25531,29691.24163],
    ["Germany",99578.34918,"199348.1259","349460.0242","375201.8853","751826.6128",1505648.269,2511060.075,5524971.151,8134457.604,17164904.18,24882867.42,26075390.96,40243315.09,46108618.05,53418007.22,56713741.77,59558077.18,62019248.83,64330711.38,65100238.35,67488021.3,24996.14315,26127.05882,26505.30317,26119.4586,26720.64284,27145.95792,27336.46604,27788.88416,28291.5981,28842.65612,29726.87876,30061.39867,30035.80198,29952.93665,30260.6614,30496,31720.47441,32836.51475,33157.24396,31569.16579,32886.85849],
    ["Greece",0,"4999.453078","4998.774359","19993.31664","39988.65855",79997.63871,150066.0424,200220.9944,350682.5429,752211.5308,1004073.363,1206395.24,1624458.098,1977770.816,2387743.306,2683947.36,3618224.25,4038551.26,4313470.274,4802476.704,5043549.624,16851.56726,17193.35585,17213.66699,16868.79116,17153.79734,17492.90647,17894.04925,18531.30305,19146.38339,19803.26853,20675.20934,21585.56684,22416.44963,23532.36133,24587.16072,25520,26869.65666,27757.23169,27256.46737,26320.44685,24947.10641],
    ["Hong Kong, China",0,"7084.442624","50242.04748","79723.81115","168388.9794",197763.1448,297670.6471,674684.5425,954777.7353,1420892.265,1887645.221,2640819.467,2945441.715,3561208.583,3839563.985,3874809.771,4154457.312,4453561.44,4619887.456,4849655.344,5078296.08,22536.16616,23541.77933,24757.60301,25864.06501,26685.03724,27018.05059,27448.7397,28377.63219,26767.13019,27452.02434,29972.37793,29866.07349,30209.01516,30961.45389,33401.64336,35680,37821.40882,40068.582,40771.37281,39584.02684,41939.22256],
    ["India",0,"missing","1012.972197","2025.163468","10122.05303",252973.9048,455255.9957,708073.4736,1415953.222,2831310.292,5559654.504,7072638.388,16742760.42,18650651.23,22191838.75,27225078.6,32460714.65,46371879.35,52159829.14,61836308.89,91846074.53,1160.345798,1150.457165,1185.538492,1226.996521,1289.530858,1354.029921,1433.417967,1475.053148,1543.117596,1606.866972,1648.20878,1714.150694,1754.034412,1872.383626,1981.021662,2126,2292.640805,2488.32885,2605.770925,2699.732953,2961.17336],
    ["Iran",0,"missing","missing","missing","240.1345286",2497.69939,9624.739265,28968.07944,63016.37512,243337.8048,610421.4229,984239.8994,3109384.141,4719208.688,5160109.893,5648292.567,6182990.734,6764941.661,7402423.398,8096282.284,9616571.9,6332.066313,6771.029673,7045.384099,7171.009289,7331.321076,7495.820974,7835.2864,8129.182798,8184.545871,8260.178616,8600.733745,8834.252298,9184.109982,9725.284527,10298.34783,10692,11177.95985,11759.19665,11679.1893,11971.14474,12483.19957],
    ["Iraq",0,"missing","missing","missing","missing","missing","missing","missing","missing","missing","missing",24552,126165.335,155489.892,239566.707,246235.149,267999.1841,269333.4033,298211.36,325680.9084,791789.775,7525.13325,2913.936005,3703.061209,3613.880459,3350.26347,2973.042497,3264.738044,3062.94653,3438.690382,3643.965742,3951.742726,4209.657439,4402.903416,3366.634799,3293.15755,3200,3422.390665,3371.756518,3496.684192,3602.536911,3760.811656],
    ["Ireland",0,"2009.231629","6022.681978","10025.3533","20027.23206",40023.36478,80020.65144,150033.2375,300093.7518,410121.1466,678992.5028,894504.8294,1017399.389,1376004.609,1511291.552,1730161.276,2316927.83,2598356.719,2844162.644,2972927.558,3122225.15,16904.61273,17120.65557,17558.81555,17927.85059,18869.09364,20581.98352,22144.69463,24521.94713,26127.24883,28496.79865,30827.97684,32335.27514,34077.04939,35191.11292,36303.8009,38058,39175.61851,39959.74509,38163.9118,35697.12728,35257.17453],
    ["Israel",4984.767486,"9963.546097","14931.4148","19886.47608","29796.53855",49610.88781,118973.4297,247721.064,594214.4355,791705.4789,1255548.658,1065537.824,1108793.972,1244593.134,1473531.857,1663958.671,1883406.45,3330549.497,4212131.224,4583111.009,4985164.8,17495.14868,17543.46155,18051.52254,18202.41613,19299.93192,20145.03229,20644.52129,20896.60924,21113.00987,21332.80433,22834.92834,22377.17741,21905.59514,22090.72943,22930.27791,23846,24666.25058,25558.55042,26036.39234,25757.80891,26459.26565],
    ["Italy",9970.983575,"19935.58529","39857.00833","69726.85574","109546.7053",298747.6813,582644.3048,1295197.449,2591587.754,8177530.571,13170038.83,15570838.31,16122682.31,16803802.01,19366881.14,20534922.1,22445289.79,24268109.62,26669675.6,29419417.75,32503695.21,21561.42044,21755.39858,22013.64486,21826.21878,22471.2282,23680.30912,23897.55367,24675.02446,25409.99448,26128.82464,27160.46843,27779.73034,27968.09817,27839.64196,27887.57345,27750,28220.53786,28511.28973,27950.95204,26227.92541,26549.34432],
    ["Japan",24809.26759,"49618.69637","119085.625","496193.3249","992389.4046",1984770.771,5458136.831,11462237.15,16811229.5,26852833.05,37704451.75,48509407.43,58731229.16,61117628.08,78803167.5,84583505.61,86862682.19,94001006.1,95414658.56,98710329.9,98951089.44,25870.13512,26648.76575,26824.89511,26818.24098,27037.82807,27509.08014,28385.15847,28816.58499,27904.67521,27809.60299,28559.60016,28569.05491,28604.5919,29073.61233,29742.04613,30290,30784.47881,31426.78694,31079.6708,29364.97157,30731.99257],
    ["Kenya",0,"missing","missing","missing","missing",199.517221,2491.887637,9958.755746,14925.82776,34804.84728,99405.43189,198802.5125,397694.1423,994519.1173,1049230.023,1104727.715,2752918.184,2980077.057,3334084.741,3962003.675,10492784.64,1428.995574,1402.955382,1341.921721,1305.892414,1309.874121,1335.672769,1361.065432,1360.485021,1355.293048,1346.864615,1318.489871,1304.011969,1287.514732,1291.423304,1317.4731,1359,1402.772465,1457.042561,1436.098669,1432.29552,1471.325641],
    ["Lebanon",0,"missing","missing","missing","missing",2480.1124,4960.699994,44645.982,99207.16937,198406.0448,297617.8351,257959.2683,270795.28,314833.68,359823.78,410915.388,614618.55,774875.0128,938805.9495,993847.232,1310555.07,4849.201009,6627.246507,6890.806854,7323.931383,7844.052445,8271.723264,8509.877854,8754.96385,8920.810717,8754.698937,8809.991336,9110.353282,9313.93883,9598.457156,10207.45178,10212,10340.6013,11209.21181,12016.98325,12930.41633,13657.99158],
    ["Mexico",0,"5052.916492","15148.3712","25222.53848","39304.8672",94638.79747,188098.0741,598714.5707,1227834.247,1829828.961,5079330.969,7131596.66,12213464.21,13403431.4,14829811.35,18325854.58,21049442.56,22728838.7,24017156,29509589.39,35217856.09,9103.392352,9315.66066,9472.384295,9482.490823,9733.592352,8954.524248,9274.6988,9767.29753,10108.7721,10358.79686,10894.51448,10763.08091,10742.44053,10778.20771,11118.68976,11317,11739.70775,11924.45899,11870.95703,10980.00275,11390.58354],
    ["Netherlands",49795.96378,"79696.20213","199356.9713","299245.4251","499023.3611",998301.055,1497257.831,2195037.969,3490213.383,6180223.56,6977160.686,7876704.802,9834553.562,10384615.74,11117432.35,13207420.17,13708351.68,14111797.11,14427152.51,14842071.91,15071302.71,24902.12325,25383.24186,25713.88176,25958.68988,26648.08423,27423.95552,28344.58536,29491.94284,30566.49728,31895.2921,33000.17201,33482.66535,33406.91901,33454.56317,34181.8712,34724,35845.49136,37169.00025,37692.29806,36125.3893,36526.12179],
    ["New Zealand",0,"missing","10016.87911","22499.86744","114816.0242",179498.7792,298944.9028,547868.3235,1196948.437,1583996.688,1827918.453,2080035.958,2340766.447,2451162.905,2522845.14,2592926.962,2887583.07,2952564.794,3081305.823,3445134.516,3625552.88,18833.59677,18380.78411,18363.32494,19337.1909,20116.22892,20661.47565,21064.06604,21050.41377,20876.10874,21689.0128,21895.15598,22426.58919,23189.80135,23728.4829,24339.44451,24554,24997.83299,25605.64999,25160.53458,24468.04904,24607.28417],
    ["Nigeria",0,"missing","missing","missing","missing","missing",9947.552942,19869.33033,29768.9275,49568.37851,79260.61321,113909.2815,416063.6246,743281.1936,1754284.515,4962548.067,7948195.889,9948614.993,23895584.78,43920958.87,45039710.64,1571.113656,1621.231341,1619.848217,1612.467224,1561.224534,1561.312205,1619.420048,1624.941275,1613.594119,1590.296573,1619.115759,1629.843229,1615.286395,1746.049177,1807.336669,1892,1955.67624,2036.029517,2100.105751,2186.14934,2297.341367],
    ["Norway",30000,"59996.29855","94985.01737","119972.4385","179964.3305",279994.3476,800301.4951,900855.7134,1001499.345,1101924.689,1201846.046,1320367.031,3303730.312,3561681.058,3563676.037,3790642.03,3854096.051,4104848.509,4328303.166,4451149.042,4560337.363,31161.75439,32200.44712,33135.03622,33900.43631,35546.93704,36975.02756,38794.59044,40658.93319,41357.93039,42008.30131,43174.48117,43887.58522,44429.39792,44766.70981,46387.24852,47551,48221.98627,48979.06288,48321.90584,47116.84479,46595.82113],
    ["Pakistan",0,"missing","missing","missing","missing",156.2567799,3911.307846,36986.49167,60563.57051,78198.22598,"missing",1945625.933,3876636.469,7720024.261,9607714.756,10045952.82,11436613.33,16617615.83,26405644.09,28285015.49,29128969.67,1825.996628,1875.264306,1971.829464,1966.816708,1991.476309,2038.35576,2081.248333,2049.350521,2049.56106,2073.072718,2086.457879,2068.834308,2092.712441,2152.689867,2269.738685,2396,2489.060915,2611.619308,2660.74984,2590.53944,2614.772162],
    ["Philippines",0,"missing","missing","missing","3956.738031",19797.13814,39627.36588,99162.12963,816971.0448,1083292.469,1532479.252,1993065.648,3493131.957,3997572.33,4401328.578,4617485.022,5000984.97,5292562.071,5608769.246,8253278.1,23315199.5,2386.906358,2319.939712,2279.324017,2279.474603,2328.828092,2383.689179,2464.68351,2536.534925,2469.840966,2502.917112,2598.886344,2591.322668,2650.921068,2727.423873,2847.409537,2932,3025.051073,3161.947667,3228.118596,3247.247376,3434.695972],
    ["Poland",0,"1995.602383","19937.45624","49796.50207","149275.7133",248683.6377,497343.1946,795985.0659,1573894.906,2091784.833,2790497.251,3788670.466,8085750.116,9499880.154,12418371.09,14811852.02,17016333.11,18560224.33,20305468.86,22555569.75,23854014.51,8172.110085,7572.207653,7738.881247,8007.930474,8414.155074,8986.892389,9518.902961,10159.58368,10716.1256,11208.80057,11680.79102,11825.86665,12002.23908,12472.53327,13146.00686,13573,14424.59855,15416.09702,16210.60037,16465.80988,17089.72163],
    ["Portugal",0,"9969.2663","24997.74616","45142.97583","72448.07239",151300.5193,303126.7618,505764.9476,1011951.137,1517527.313,1698287.48,1877400.642,2018984.687,3105205.234,3338887.203,3689227.684,4020557.163,4464922.352,4455902.428,4955586.375,5455217.292,15369.31004,16046.60894,16207.26663,15812.16157,15869.42749,16486.83637,17027.44647,17641.03156,18368.51878,18959.83625,19609.7337,19904.86524,19970.90787,19727.84414,19942.44358,20006,20218.29032,20638.91465,20601.22862,19983.8616,20350.98257],
    ["Russia",0,"missing","1001.385188","20029.06365","80116.1177",220298.4992,400467.0125,700645.0847,1200823.538,1500829.066,2901733.813,4303539.248,6007446.329,12023428.18,18556996.03,21902527.74,25865216.12,35336431.84,38410659.73,41488582.62,61472010.52,12633.27405,11975.22767,10231.85119,9342.30967,8152.97931,7816.179729,7543.840316,7662.111298,7268.488052,7757.866564,8570.996315,9052.543761,9532.009977,10288.44493,11090.77402,11861,12881.82662,14020.45804,14756.21687,13614.7661,14207.51818],
    ["Saudi Arabia",0,"missing","missing","missing","missing",2025.991236,5022.120734,9909.568586,19531.99842,96638.6937,443139.2746,968115.5681,1370353.835,1787103.209,2375820.643,3054432.44,4825859.727,7651252.8,9419990.04,10187459.9,11253715.26,23520.95202,25113.59458,24841.61777,23173.54483,22010.66134,21162.71443,20772.35619,20586.69019,20353.6982,19635.30493,20001.87326,19528.5007,19014.54118,19945.47406,20481.97551,21220,21667.79706,22212.03432,23293.77485,22943.13849,23841.28888],
    ["Singapore",0,"5005.775401","15039.90603","25092.1582","40124.90863",100043.0725,298639.3742,494501.8276,736860.2766,928702.3928,1410948,1658881.291,1895141.99,2199845.282,2579297.96,2602259.39,2601873.45,3117727.92,3292829.04,3412495.05,3611356.78,23142.79775,23983.76449,24769.8912,27040.1088,29303.24026,30793.47411,31934.80024,33519.4766,31918.24082,33981.15243,36834.84971,34910.70597,36023.1054,37024.31798,39796.66535,41479,43217.56875,44673.85221,44103.96813,42988.99142,48324.58055],
    ["South Africa",0,"5006.708347","15019.73112","45054.67713","100100.5301",280186.6449,355070.3562,699733.3648,1264677.611,1816803.156,2394035.661,2880703.662,3087782.046,3267782.237,3978902.997,3578983.181,3676600.134,3939327.804,4157622.301,4975150.3,6166336.491,7786.875847,7545.408308,7225.069258,7159.995287,7236.904058,7304.20064,7454.416557,7479.188244,7339.955533,7333.692093,7454.445716,7520.719617,7710.946444,7863.742183,8154.739066,8477,8857.048472,9160.532691,9385.984291,9139.389386,9322.168814],
    ["Spain",5006.420819,"10012.27851","30036.07126","50058.62999","110119.4357",150137.6709,526339.5412,1110357.115,1733155.763,2830396.125,5489286.477,7398691.594,8434267.631,16786492.14,18806393.69,20777737.15,22171809.68,24581476.02,26907169.77,28478182.51,30318658.76,18064.9166,18472.90556,18603.06452,18374.86563,18782.73427,19272.14422,19709.87114,20445.29896,21333.94306,22286.3637,23410.16483,24221.7998,24835.47166,25564.28953,26357.04829,27270,27949.66729,28403.03141,28204.17887,26950.02229,26779.63704],
    ["Sweden",50000,"99998.81627","129995.1169","149991.2465","299985.1884",450000,800125.3443,2100856.816,2962761.73,3667831.743,4047995.888,4595249.465,6282022.137,7070575.69,7531614.839,7659593.364,7978004.463,7513242.817,8313184.8,8473110.1,8441718.3,24253.2713,23258.40177,23245.65698,22699.21373,23495.89873,24565.99155,24898.70453,25523.94011,26314.49867,27299.74371,28640.08844,28906.76908,29449.45744,29969.7124,31141.10607,31995,33211.45498,34091.93364,33563.33839,31604.8425,33316.77213],
    ["Switzerland",39756.4065,"79530.25953","119374.0252","149352.3546","189345.703",249304.8011,321249.5796,1070662.933,1764011.104,2426491.6,3376084.668,3971600.837,4454554.65,4756907.778,4990914.618,5197919.907,5653540.95,5806685.236,5997977.568,6196044.543,6430362.802,32875.77966,32207.74413,31871.5303,31515.65427,31599.61928,31530.76934,31589.72381,32135.32301,33039.50454,33349.65383,34386.90248,34569.38136,34480.95771,34183.28306,34864.09237,35520,36635.1663,37790.73022,38181.48483,36518.56609,37220.03817],
    ["Thailand",0,"30.14470488","200.1371944","7968.112436","22831.36972",44633.43142,69581.33037,219679.6941,672849.8057,1514184.881,2329815.09,3550430.105,4868420.957,6078799.864,7053467.47,10022116.96,11545108.16,13579629.14,12424772.72,13809930.52,14653913.61,4039.673108,4327.895394,4616.896545,4940.011053,5317.165499,5734.624528,6001.238003,5852.625497,5183.914679,5366.09671,5578.402898,5656.198985,5913.187529,6273.005406,6620.033558,6869,7171.648618,7508.367883,7652.231674,7458.024057,7996.075059],
    ["Turkey",0,"missing","missing","4817.522918","28879.87784",48087.24127,115291.8686,287927.3224,431460.9725,1436988.539,2393479.763,3349546.346,7447773.577,8179652.089,9802998.157,10534936.56,12597189.33,20038925.47,24376486,26152021.17,28969975.82,5807.686108,5733.320979,5946.28765,6290.020377,5826.598838,6125.003638,6432.180967,6791.417195,6876.998138,6442.515444,6803.286822,6192.74823,6577.701511,6856.141683,7357.117393,7786,8223.302258,8506.694555,8456.753897,7941.956903,8556.033519],
    ["United Kingdom",49979.88644,"99955.63384","149920.0667","299807.2411","599560.1875",1099144.73,2398186.006,4307073.905,7995303.267,12493278.45,15791071.04,19786365.83,33515215.62,38635537.73,39295002.11,42141908.9,41662350.01,45726882.24,48029802.28,51516674.41,52730234.5,23123.52696,22739.73307,22705.09254,23170.28151,24118.66691,24716.01425,25328.77116,26074.53136,26773.33027,27467.50626,28644.71245,28978.41437,29478.99919,30204.15431,31097.5219,31580,32214.65115,33165.20164,32623.51605,31127.30791,31448.18228],
    ["United States",1988024.101,"2975534.953","4453199.953","5924597.893","12811918.54",24600556.9,44232691.29,58935677.59,83053031.2,100125498.2,121697044.8,140147751.6,169576672.1,179718040.2,190430149.5,201742975.8,206493363.8,226713423,225691907.4,218457577.6,229684121.5,33710.38982,33076.87434,33589.59428,33914.89202,34730.56433,35053.28613,35806.99679,36847.81337,37811.67837,38912.58178,39758.49911,39474.1064,39535.84457,40044.18458,40956.40134,41674,42378.84536,42764.22125,42226.58003,40576.8876,41230.56986],
    ["Venezuela",0,"missing","2493.176494","8776.400077","11968.36354",26929.93056,55856.76358,89772.94256,324190.5871,678326.8315,818005.0038,1150223.87,1241033.599,1930220.072,2201970.529,3347146.677,4130269.5,5747710.844,7261277.118,8898212.856,10337114.99,9701.14394,10243.33722,10733.92631,10534.83654,9912.069691,9935.409579,9725.53456,10165.49518,10014.50845,9245.232662,9434.237476,9604.520364,8605.047831,7810.970816,9121.430347,9876,10707.2495,11453.17562,11862.322,11299.31922,10956.60355]
];
var dataset = [];
for (var i=0;i<data.length;i++){
    dataset[i] = [];
    dataset[i] = {"points":[],"label":data[i][0]};
    var pts = [];
    for (var j=1;j<=21;j++){
        var x = data[i][j+21];
        var y = data[i][j];
        if (y=="missing"){
            x = 0;
            y = 0;
        }
        pts[j-1] = [parseFloat(x),parseFloat(y)];
    }
    dataset[i].points = pts;
}
for (var i=0;i<dataset.length;i++){
    var evenPts = [];
    for (var j=0;j<dataset[i].points.length;j++){
        if (j%2==0){
            evenPts.push(dataset[i].points[j]);
        }
    }
    dataset[i].points = evenPts;
}
var labels = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];

var xLabel = "income per person (GDP/capita, PPP$ inflation-adjusted)";
var yLabel = "total internet users";
var title = "Total Internet Users of Selected World Countries";*/


/**var data = [
    //["Australia",8960506.11,10212332.68,"missing","missing","missing",12854217.6,13691234.7,14667831.67,15418952.64,16262457.75,16923971.84,29241.5145,30043.24277,30687.75473,31634.24243,32098.50615,32798,33204.15573,34196.81242,34444.33306,34389.09927,34884.76376],
    ["Brazil",5007203.697,8009871.983,16403933.51,23989344.64,35071405.33,39099569.36,52963579.27,58609644.02,64799077.08,75791320.44,79245740.06,8056.060915,8022.523305,8131.212843,8110.411789,8461.498669,8596,8842.429401,9290.118627,9681.548355,9564.568719,10195.44815],
    ["Canada",15732358.25,18642276.07,19267447.73,20292696.8,21068712.44,23134293.76,23622656.07,24139408.49,25562540.72,27041384.74,27757539.89,32448.60764,32570.56646,33328.96507,33635.25438,34346.96551,35078,35644.47329,36002.32901,35978.20955,34545.50306,35219.34297],
    ["China",22538411.74,33732185.84,59097714.83,80190592.55,94940305.78,111449553.6,138335407.2,211437109.6,300190268.4,385788649,460077957.1,3012.123972,3309.79598,3695.649982,4228.975907,4551.126044,4909.2,5502.395991,6249.291445,6816.668675,7408.620677,8143.482408],
    ["Finland",1927000.745,2235090.679,3244677.512,3606773.859,3783149.901,3905985.922,4194844.618,4273610.162,4448176.658,4406241.295,4661254.019,27171.96611,27825.5291,28204.59057,28650.02742,29651.4045,30469,31684.20267,33226.46458,33162.40273,30188.47491,31053.39703],
    ["France",8448513.599,15635143.67,18039953.46,21750455.68,23723604.53,26149202.12,28767899.07,40807003.5,43891158.31,44697966.37,50292729.03,28636.15436,28983.72202,29043.35181,29048.87772,29505.88006,29644,30159.67962,30652.66305,30459.72132,29345.25531,29691.24163],
    ["Germany",24882867.42,26075390.96,40243315.09,46108618.05,53418007.22,56713741.77,59558077.18,62019248.83,64330711.38,65100238.35,67488021.3,29726.87876,30061.39867,30035.80198,29952.93665,30260.6614,30496,31720.47441,32836.51475,33157.24396,31569.16579,32886.85849],
    ["Greece",1004073.363,1206395.24,1624458.098,1977770.816,2387743.306,2683947.36,3618224.25,4038551.26,4313470.274,4802476.704,5043549.624,20675.20934,21585.56684,22416.44963,23532.36133,24587.16072,25520,26869.65666,27757.23169,27256.46737,26320.44685,24947.10641],
    //["Hong Kong, China",1887645.221,2640819.467,2945441.715,3561208.583,3839563.985,3874809.771,4154457.312,4453561.44,4619887.456,4849655.344,5078296.08,29972.37793,29866.07349,30209.01516,30961.45389,33401.64336,35680,37821.40882,40068.582,40771.37281,39584.02684,41939.22256],
    ["India",5559654.504,7072638.388,16742760.42,18650651.23,22191838.75,27225078.6,32460714.65,46371879.35,52159829.14,61836308.89,91846074.53,1648.20878,1714.150694,1754.034412,1872.383626,1981.021662,2126,2292.640805,2488.32885,2605.770925,2699.732953,2961.17336],
    ["Iran",610421.4229,984239.8994,3109384.141,4719208.688,5160109.893,5648292.567,6182990.734,6764941.661,7402423.398,8096282.284,9616571.9,8600.733745,8834.252298,9184.109982,9725.284527,10298.34783,10692,11177.95985,11759.19665,11679.1893,11971.14474,12483.19957],
    //["Iraq","missing",24552,126165.335,155489.892,239566.707,246235.149,267999.1841,269333.4033,298211.36,325680.9084,791789.775,3951.742726,4209.657439,4402.903416,3366.634799,3293.15755,3200,3422.390665,3371.756518,3496.684192,3602.536911,3760.811656],
    ["Ireland",678992.5028,894504.8294,1017399.389,1376004.609,1511291.552,1730161.276,2316927.83,2598356.719,2844162.644,2972927.558,3122225.15,30827.97684,32335.27514,34077.04939,35191.11292,36303.8009,38058,39175.61851,39959.74509,38163.9118,35697.12728,35257.17453],
    ["Israel",1255548.658,1065537.824,1108793.972,1244593.134,1473531.857,1663958.671,1883406.45,3330549.497,4212131.224,4583111.009,4985164.8,22834.92834,22377.17741,21905.59514,22090.72943,22930.27791,23846,24666.25058,25558.55042,26036.39234,25757.80891,26459.26565],
    ["Italy",13170038.83,15570838.31,16122682.31,16803802.01,19366881.14,20534922.1,22445289.79,24268109.62,26669675.6,29419417.75,32503695.21,27160.46843,27779.73034,27968.09817,27839.64196,27887.57345,27750,28220.53786,28511.28973,27950.95204,26227.92541,26549.34432],
    ["Japan",37704451.75,48509407.43,58731229.16,61117628.08,78803167.5,84583505.61,86862682.19,94001006.1,95414658.56,98710329.9,98951089.44,28559.60016,28569.05491,28604.5919,29073.61233,29742.04613,30290,30784.47881,31426.78694,31079.6708,29364.97157,30731.99257],
   // ["Kenya",99405.43189,198802.5125,397694.1423,994519.1173,1049230.023,1104727.715,2752918.184,2980077.057,3334084.741,3962003.675,10492784.64,1318.489871,1304.011969,1287.514732,1291.423304,1317.4731,1359,1402.772465,1457.042561,1436.098669,1432.29552,1471.325641],
    ["Lebanon",297617.8351,257959.2683,270795.28,314833.68,359823.78,410915.388,614618.55,774875.0128,938805.9495,993847.232,1310555.07,8809.991336,9110.353282,9313.93883,9598.457156,10207.45178,10212,10340.6013,11209.21181,12016.98325,12930.41633,13657.99158],
    ["Mexico",5079330.969,7131596.66,12213464.21,13403431.4,14829811.35,18325854.58,21049442.56,22728838.7,24017156,29509589.39,35217856.09,10894.51448,10763.08091,10742.44053,10778.20771,11118.68976,11317,11739.70775,11924.45899,11870.95703,10980.00275,11390.58354],
    ["Netherlands",6977160.686,7876704.802,9834553.562,10384615.74,11117432.35,13207420.17,13708351.68,14111797.11,14427152.51,14842071.91,15071302.71,33000.17201,33482.66535,33406.91901,33454.56317,34181.8712,34724,35845.49136,37169.00025,37692.29806,36125.3893,36526.12179],
    ["New Zealand",1827918.453,2080035.958,2340766.447,2451162.905,2522845.14,2592926.962,2887583.07,2952564.794,3081305.823,3445134.516,3625552.88,21895.15598,22426.58919,23189.80135,23728.4829,24339.44451,24554,24997.83299,25605.64999,25160.53458,24468.04904,24607.28417],
    //["Nigeria",79260.61321,113909.2815,416063.6246,743281.1936,1754284.515,4962548.067,7948195.889,9948614.993,23895584.78,43920958.87,45039710.64,1619.115759,1629.843229,1615.286395,1746.049177,1807.336669,1892,1955.67624,2036.029517,2100.105751,2186.14934,2297.341367],
    ["Norway",1201846.046,1320367.031,3303730.312,3561681.058,3563676.037,3790642.03,3854096.051,4104848.509,4328303.166,4451149.042,4560337.363,43174.48117,43887.58522,44429.39792,44766.70981,46387.24852,47551,48221.98627,48979.06288,48321.90584,47116.84479,46595.82113],
   // ["Pakistan","missing",1945625.933,3876636.469,7720024.261,9607714.756,10045952.82,11436613.33,16617615.83,26405644.09,28285015.49,29128969.67,2086.457879,2068.834308,2092.712441,2152.689867,2269.738685,2396,2489.060915,2611.619308,2660.74984,2590.53944,2614.772162],
    ["Philippines",1532479.252,1993065.648,3493131.957,3997572.33,4401328.578,4617485.022,5000984.97,5292562.071,5608769.246,8253278.1,23315199.5,2598.886344,2591.322668,2650.921068,2727.423873,2847.409537,2932,3025.051073,3161.947667,3228.118596,3247.247376,3434.695972],
    ["Poland",2790497.251,3788670.466,8085750.116,9499880.154,12418371.09,14811852.02,17016333.11,18560224.33,20305468.86,22555569.75,23854014.51,11680.79102,11825.86665,12002.23908,12472.53327,13146.00686,13573,14424.59855,15416.09702,16210.60037,16465.80988,17089.72163],
    ["Portugal",1698287.48,1877400.642,2018984.687,3105205.234,3338887.203,3689227.684,4020557.163,4464922.352,4455902.428,4955586.375,5455217.292,19609.7337,19904.86524,19970.90787,19727.84414,19942.44358,20006,20218.29032,20638.91465,20601.22862,19983.8616,20350.98257],
    ["Russia",2901733.813,4303539.248,6007446.329,12023428.18,18556996.03,21902527.74,25865216.12,35336431.84,38410659.73,41488582.62,61472010.52,8570.996315,9052.543761,9532.009977,10288.44493,11090.77402,11861,12881.82662,14020.45804,14756.21687,13614.7661,14207.51818],
    ["Saudi Arabia",443139.2746,968115.5681,1370353.835,1787103.209,2375820.643,3054432.44,4825859.727,7651252.8,9419990.04,10187459.9,11253715.26,20001.87326,19528.5007,19014.54118,19945.47406,20481.97551,21220,21667.79706,22212.03432,23293.77485,22943.13849,23841.28888],
    ["Singapore",1410948,1658881.291,1895141.99,2199845.282,2579297.96,2602259.39,2601873.45,3117727.92,3292829.04,3412495.05,3611356.78,36834.84971,34910.70597,36023.1054,37024.31798,39796.66535,41479,43217.56875,44673.85221,44103.96813,42988.99142,48324.58055],
    ["South Africa",2394035.661,2880703.662,3087782.046,3267782.237,3978902.997,3578983.181,3676600.134,3939327.804,4157622.301,4975150.3,6166336.491,7454.445716,7520.719617,7710.946444,7863.742183,8154.739066,8477,8857.048472,9160.532691,9385.984291,9139.389386,9322.168814],
    ["Spain",5489286.477,7398691.594,8434267.631,16786492.14,18806393.69,20777737.15,22171809.68,24581476.02,26907169.77,28478182.51,30318658.76,23410.16483,24221.7998,24835.47166,25564.28953,26357.04829,27270,27949.66729,28403.03141,28204.17887,26950.02229,26779.63704],
    ["Sweden",4047995.888,4595249.465,6282022.137,7070575.69,7531614.839,7659593.364,7978004.463,7513242.817,8313184.8,8473110.1,8441718.3,28640.08844,28906.76908,29449.45744,29969.7124,31141.10607,31995,33211.45498,34091.93364,33563.33839,31604.8425,33316.77213],
    ["Switzerland",3376084.668,3971600.837,4454554.65,4756907.778,4990914.618,5197919.907,5653540.95,5806685.236,5997977.568,6196044.543,6430362.802,34386.90248,34569.38136,34480.95771,34183.28306,34864.09237,35520,36635.1663,37790.73022,38181.48483,36518.56609,37220.03817],
    ["Thailand",2329815.09,3550430.105,4868420.957,6078799.864,7053467.47,10022116.96,11545108.16,13579629.14,12424772.72,13809930.52,14653913.61,5578.402898,5656.198985,5913.187529,6273.005406,6620.033558,6869,7171.648618,7508.367883,7652.231674,7458.024057,7996.075059],
    ["Turkey",2393479.763,3349546.346,7447773.577,8179652.089,9802998.157,10534936.56,12597189.33,20038925.47,24376486,26152021.17,28969975.82,6803.286822,6192.74823,6577.701511,6856.141683,7357.117393,7786,8223.302258,8506.694555,8456.753897,7941.956903,8556.033519],
    ["United Kingdom",15791071.04,19786365.83,33515215.62,38635537.73,39295002.11,42141908.9,41662350.01,45726882.24,48029802.28,51516674.41,52730234.5,28644.71245,28978.41437,29478.99919,30204.15431,31097.5219,31580,32214.65115,33165.20164,32623.51605,31127.30791,31448.18228],
    ["United States",121697044.8,140147751.6,169576672.1,179718040.2,190430149.5,201742975.8,206493363.8,226713423,225691907.4,218457577.6,229684121.5,39758.49911,39474.1064,39535.84457,40044.18458,40956.40134,41674,42378.84536,42764.22125,42226.58003,40576.8876,41230.56986],
    ["Venezuela",818005.0038,1150223.87,1241033.599,1930220.072,2201970.529,3347146.677,4130269.5,5747710.844,7261277.118,8898212.856,10337114.99,9434.237476,9604.520364,8605.047831,7810.970816,9121.430347,9876,10707.2495,11453.17562,11862.322,11299.31922,10956.60355]
];*/

var data = [
    ["Argentina",2599435.568,3648448.079,4097918.576,4527353.73,6148589.451,6854529.687,8166599.958,10214687.58,11164731.06,13621239.8,14548455.36,7695.594073,7283.062916,6428.393836,6933.155594,7492.249508,8107.975365,8717.176296,9388.688523,9935.834246,9933.229024,10749.31922],
    ["Indonesia",1975110.813,4364313.796,4674319.92,5295346.418,5840411.903,8187516.65,10955189.12,13450875.26,18602209.18,20647905.64,23747222.76,773.3109699,791.0764547,816.0164079,844.1834857,875.7291576,914.5999046,953.9355312,1003.364434,1052.433389,1089.724014,1145.385435],
    ["South Korea",20556467.93,26155173.56,27573995,30539268.24,34045918.17,34577432.61,36916099.47,37429495.68,38664500.31,39138561.17,40329659.81,11346.66499,11710.57982,12478.06366,12764.27199,13303.82,13801.82945,14446.3586,15113.35278,15349.84987,15325.94024,16219.38807],
    ["Australia",8960506.11,10212332.68,"missing","missing","missing",12854217.6,13691234.7,14667831.67,15418952.64,16262457.75,16923971.84,29241.5145,30043.24277,30687.75473,31634.24243,32098.50615,32798,33204.15573,34196.81242,34444.33306,34389.09927,34884.76376],
    ["Brazil",5007203.697,8009871.983,16403933.51,23989344.64,35071405.33,39099569.36,52963579.27,58609644.02,64799077.08,75791320.44,79245740.06,8056.060915,8022.523305,8131.212843,8110.411789,8461.498669,8596,8842.429401,9290.118627,9681.548355,9564.568719,10195.44815],
    ["Canada",15732358.25,18642276.07,19267447.73,20292696.8,21068712.44,23134293.76,23622656.07,24139408.49,25562540.72,27041384.74,27757539.89,32448.60764,32570.56646,33328.96507,33635.25438,34346.96551,35078,35644.47329,36002.32901,35978.20955,34545.50306,35219.34297],
    ["China",22538411.74,33732185.84,59097714.83,80190592.55,94940305.78,111449553.6,138335407.2,211437109.6,300190268.4,385788649,460077957.1,3012.123972,3309.79598,3695.649982,4228.975907,4551.126044,4909.2,5502.395991,6249.291445,6816.668675,7408.620677,8143.482408],
    ["France",8448513.599,15635143.67,18039953.46,21750455.68,23723604.53,26149202.12,28767899.07,40807003.5,43891158.31,44697966.37,50292729.03,28636.15436,28983.72202,29043.35181,29048.87772,29505.88006,29644,30159.67962,30652.66305,30459.72132,29345.25531,29691.24163],
    ["Germany",24882867.42,26075390.96,40243315.09,46108618.05,53418007.22,56713741.77,59558077.18,62019248.83,64330711.38,65100238.35,67488021.3,29726.87876,30061.39867,30035.80198,29952.93665,30260.6614,30496,31720.47441,32836.51475,33157.24396,31569.16579,32886.85849],
    ["India",5559654.504,7072638.388,16742760.42,18650651.23,22191838.75,27225078.6,32460714.65,46371879.35,52159829.14,61836308.89,91846074.53,1648.20878,1714.150694,1754.034412,1872.383626,1981.021662,2126,2292.640805,2488.32885,2605.770925,2699.732953,2961.17336],
    ["Italy",13170038.83,15570838.31,16122682.31,16803802.01,19366881.14,20534922.1,22445289.79,24268109.62,26669675.6,29419417.75,32503695.21,27160.46843,27779.73034,27968.09817,27839.64196,27887.57345,27750,28220.53786,28511.28973,27950.95204,26227.92541,26549.34432],
    ["Japan",37704451.75,48509407.43,58731229.16,61117628.08,78803167.5,84583505.61,86862682.19,94001006.1,95414658.56,98710329.9,98951089.44,28559.60016,28569.05491,28604.5919,29073.61233,29742.04613,30290,30784.47881,31426.78694,31079.6708,29364.97157,30731.99257],
    ["Mexico",5079330.969,7131596.66,12213464.21,13403431.4,14829811.35,18325854.58,21049442.56,22728838.7,24017156,29509589.39,35217856.09,10894.51448,10763.08091,10742.44053,10778.20771,11118.68976,11317,11739.70775,11924.45899,11870.95703,10980.00275,11390.58354],
    ["Russia",2901733.813,4303539.248,6007446.329,12023428.18,18556996.03,21902527.74,25865216.12,35336431.84,38410659.73,41488582.62,61472010.52,8570.996315,9052.543761,9532.009977,10288.44493,11090.77402,11861,12881.82662,14020.45804,14756.21687,13614.7661,14207.51818],
    ["Saudi Arabia",443139.2746,968115.5681,1370353.835,1787103.209,2375820.643,3054432.44,4825859.727,7651252.8,9419990.04,10187459.9,11253715.26,20001.87326,19528.5007,19014.54118,19945.47406,20481.97551,21220,21667.79706,22212.03432,23293.77485,22943.13849,23841.28888],
    ["South Africa",2394035.661,2880703.662,3087782.046,3267782.237,3978902.997,3578983.181,3676600.134,3939327.804,4157622.301,4975150.3,6166336.491,7454.445716,7520.719617,7710.946444,7863.742183,8154.739066,8477,8857.048472,9160.532691,9385.984291,9139.389386,9322.168814],
    ["Turkey",2393479.763,3349546.346,7447773.577,8179652.089,9802998.157,10534936.56,12597189.33,20038925.47,24376486,26152021.17,28969975.82,6803.286822,6192.74823,6577.701511,6856.141683,7357.117393,7786,8223.302258,8506.694555,8456.753897,7941.956903,8556.033519],
    ["United Kingdom",15791071.04,19786365.83,33515215.62,38635537.73,39295002.11,42141908.9,41662350.01,45726882.24,48029802.28,51516674.41,52730234.5,28644.71245,28978.41437,29478.99919,30204.15431,31097.5219,31580,32214.65115,33165.20164,32623.51605,31127.30791,31448.18228],
    ["United States",121697044.8,140147751.6,169576672.1,179718040.2,190430149.5,201742975.8,206493363.8,226713423,225691907.4,218457577.6,229684121.5,39758.49911,39474.1064,39535.84457,40044.18458,40956.40134,41674,42378.84536,42764.22125,42226.58003,40576.8876,41230.56986],
];


var dataset = [];
for (var i=0;i<data.length;i++){
    dataset[i] = [];
    dataset[i] = {"points":[],"label":data[i][0]};
    var pts = [];
    for (var j=1;j<=11;j++){
        var x = data[i][j+11];
        var y = data[i][j];
       /** if (y=="missing"){
            x = 0;
            y = 0;
        }*/
        pts[j-1] = [x,y];
    }
    dataset[i].points = pts;
}
//var labels = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];
var labels = ["'00","'01","'02","'03","'04","'05","'06","'07","'08","'09","'10"];
var xLabel = "income per person (GDP/capita, PPP$ inflation-adjusted)";
var yLabel = "total internet users";
var title = "Total Internet Users of Selected World Countries";