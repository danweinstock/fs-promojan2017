function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function FitstarStatsTracker(category) {
	this.distinctIdPath = 'https://fitstar.com/stats/pixel.json';
	this.distinctId = null;

	this.settings = {
		onDistinctIdSet: null
	};

	this.initialize = function(category, settings) {
		this.settings = settings;
        this.distinctId = readCookie('distinct_id');
        this.category = category;

        if (!this.distinctId) {
    		this.getDistinctId();
        } else {
            if (this.settings.onDistinctIdSet) {
                this.settings.onDistinctIdSet.bind(this)(this.distinctId, this.category);
            }
        }
	};

    this.getDistinctId = function() {
    	this.makeRequest(this.distinctIdPath, function(xhr) {
    		this.distinctId = JSON.parse(xhr.response).distinct_id;

    		if (this.settings.onDistinctIdSet) {
    			this.settings.onDistinctIdSet.bind(this)(this.distinctId, this.category);
    		}
    	}.bind(this));
    }

    this.trackActivity = function(distinct_id, category){
        document.cookie = "distinct_id=" + distinct_id + "; Domain=fitstar.com; Max-Age=157680000; path=/";

        if (category && category.length > 0) {
        	var axel = Math.random() + "";
            var a = axel * 10000000000000;
            $("body").append('<iframe src="https://4272175.fls.doubleclick.net/activityi;src=4272175;type=fitst0;cat=' + category + ';u7=' + distinct_id + ';ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
        }
    };

    this.trackUserEvent = function(){
    	//todo
    };

    //internal
    this.makeRequest = function(url, callback) {
        var xhr;
         
        if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
        else {
            var versions = ["MSXML2.XmlHttp.5.0", 
                            "MSXML2.XmlHttp.4.0",
                            "MSXML2.XmlHttp.3.0", 
                            "MSXML2.XmlHttp.2.0",
                            "Microsoft.XmlHttp"]
 
             for(var i = 0, len = versions.length; i < len; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                }
                catch(e){}
             } // end for
        }
         
        xhr.onreadystatechange = ensureReadiness;
         
        function ensureReadiness() {
            if(xhr.readyState < 4) {
                return;
            }
             
            if(xhr.status !== 200) {
                return;
            }
 
            // all is well  
            if(xhr.readyState === 4) {
                callback(xhr);
            }           
        }
        
        xhr.open('GET', url, true);
        xhr.send('');
    };

    this.initialize(category,
    	{ onDistinctIdSet: this.trackActivity }
    );
}