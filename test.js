/**
 * Description : Controller class for th search filter
 * 				 lightning component
 *
 */
global class Afs_SearchProgramController {

    @AuraEnabled
    global static Map<String, List<DisplayPicklistValueWrapper>> getselectOptions( ) {
        String communityId =  Network.getNetworkId();
        String queryStr = 'SELECT id, Name, Afs_SendingPartner__c';
        if(!Test.isRunningTest()){
            queryStr += ' FROM AFS_Community_Configuration__c WHERE Unique_Id__c =: communityId';
        }else{
            queryStr += ' FROM AFS_Community_Configuration__c';
        }
        list<AFS_Community_Configuration__c>  listCommunityConfig;
        if(String.isNotBlank(communityId) || Test.isRunningTest()){

            listCommunityConfig  =  Database.query(queryStr);

        }
        Map<String, List<DisplayPicklistValueWrapper>> MapOfPickListValues = new Map<String, List<DisplayPicklistValueWrapper>>();
        list<String> DestinationValues = new list<String>();
        list<String> DurationsValues = new list<String>();
        list<String> ProgramTypeValues = new list<String>();
        list<String> AreaofInteresValues = new list<String>();
        list<DisplayPicklistValueWrapper> DestwrapperList = new list<DisplayPicklistValueWrapper>();
        list<DisplayPicklistValueWrapper> DurtnwrapperList = new list<DisplayPicklistValueWrapper>();
		list<DisplayPicklistValueWrapper> PrgmtpwrapperList = new list<DisplayPicklistValueWrapper>();
		list<DisplayPicklistValueWrapper> AreaIntwrapperList = new list<DisplayPicklistValueWrapper>();
        set<String> fieldsSet = new set<String>();
        fieldsSet.add('Length__c');
        fieldsSet.add('Program_Type__c');
        fieldsSet.add('Area_of_interest__c');
        fieldsSet.add('Destinations__c');
        fieldsSet.add('Show_in_portal__c');

        Afs_SecurityEnforceUtility.checkObjFieldsAccess(fieldsSet,'Program_Offer__c',false);
        Date todayDt = Date.today();
        for (Program_Offer__c pro : [SELECT id,Length__c,Program_Type__c, Area_of_interest__c,Destinations__c
    								FROM Program_Offer__c
    								WHERE Sending_Partner__c = :listCommunityConfig[0].Afs_SendingPartner__c
                                     AND Show_in_portal__c = true
                                     AND Applications_Received_From_local__c <=: todayDt
                                     AND Applications_Received_To_local__c >=: todayDt]) {
            if(pro.Destinations__c != null){
            	DestinationValues.add(pro.Destinations__c);
            }
            if(pro.Length__c != null){
            	DurationsValues.add(pro.Length__c);
            }
            if(pro.Program_Type__c != null){
            	ProgramTypeValues.add(pro.Program_Type__c);
            }
            if(pro.Area_of_interest__c != null){
                for(String arr : pro.Area_of_interest__c.split(';')){
                	AreaofInteresValues.add(arr);
                }
            }
        }

        //sorting
        DestinationValues.sort();
        DurationsValues.sort();
        ProgramTypeValues.sort();
        AreaofInteresValues.sort();

        // Get Picklist labels and create wrapper
        SObject objObject = Schema.getGlobalDescribe().get('Account').newSObject() ;
    	Schema.sObjectType objType = objObject.getSObjectType();
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        map < String, Schema.SObjectField > fieldMap = objDescribe.fields.getMap();
        map<String,map<String,String>> fieldMapNew = new map<String,map<String,String>>();

        map<String,String> valueMap = new map<String,String>();
        for(Schema.PicklistEntry picklistVal : fieldMap.get('Country__c').getDescribe().getPickListValues()){
            valueMap.put(String.valueOf(picklistVal.getValue()),String.valueOf(picklistVal.getLabel()));
        }
        fieldMapNew.put('Destinations__c',valueMap);

        // Program OFfered Fields
		objObject = Schema.getGlobalDescribe().get('Program_Offer__c').newSObject() ;
		objType = objObject.getSObjectType();
		objDescribe = objType.getDescribe();
		fieldMap = objDescribe.fields.getMap();

        valueMap = new map<String,String>();
        for(Schema.PicklistEntry picklistVal : fieldMap.get('Length__c').getDescribe().getPickListValues()){
            valueMap.put(String.valueOf(picklistVal.getValue()),String.valueOf(picklistVal.getLabel()));
        }
        fieldMapNew.put('Length__c',valueMap);
        valueMap = new map<String,String>();
        for(Schema.PicklistEntry picklistVal : fieldMap.get('Program_Type__c').getDescribe().getPickListValues()){
            valueMap.put(String.valueOf(picklistVal.getValue()),String.valueOf(picklistVal.getLabel()));
        }
        fieldMapNew.put('Program_Type__c',valueMap);
        valueMap = new map<String,String>();
        for(Schema.PicklistEntry picklistVal : fieldMap.get('Area_of_interest__c').getDescribe().getPickListValues()){
            valueMap.put(String.valueOf(picklistVal.getValue()),String.valueOf(picklistVal.getLabel()));
        }
        fieldMapNew.put('Area_of_interest__c',valueMap);

        integer DestCount = 1;
        for(String Pickval : (new Set<String>(DestinationValues))){
           DestwrapperList.add(new DisplayPicklistValueWrapper('Destinations__c' , Pickval , false ,DestCount,fieldMapNew.get('Destinations__c').get(Pickval)));
           DestCount++;
        }

        integer DurtCount = 1;
        for(String Pickval : (new Set<String>(DurationsValues))){
           DurtnwrapperList.add(new DisplayPicklistValueWrapper('Length__c' , Pickval , false ,DurtCount,fieldMapNew.get('Length__c').get(Pickval)));
           DurtCount++;
        }

        integer ProgmCount = 1;
        for(String Pickval : (new Set<String>(ProgramTypeValues))){
           PrgmtpwrapperList.add(new DisplayPicklistValueWrapper('Program_Type__c' , Pickval , false ,ProgmCount,fieldMapNew.get('Program_Type__c').get(Pickval)));
           ProgmCount++;
        }

        integer AreaCount = 1;
        for(String Pickval : (new Set<String>(AreaofInteresValues))){
           AreaIntwrapperList.add(new DisplayPicklistValueWrapper('Area_of_interest__c' , Pickval , false ,AreaCount,fieldMapNew.get('Area_of_interest__c').get(Pickval)));
           AreaCount++;
        }
        MapOfPickListValues.put('Destinations__c', DestwrapperList);
        MapOfPickListValues.put('Length__c', DurtnwrapperList);
        MapOfPickListValues.put('Program_Type__c', PrgmtpwrapperList);
        MapOfPickListValues.put('Area_of_interest__c', AreaIntwrapperList);

        return MapOfPickListValues;
    }

    global class DisplayPicklistValueWrapper {

        @auraEnabled
        global Boolean isSelected {get;set;}
        @auraEnabled
        global String Name{get;set;}
        @auraEnabled
        global String FieldName {get;set;}
        @auraEnabled
        global Integer indexId {get;set;}
        @auraEnabled
        global String FieldLbl {get;set;}

        global DisplayPicklistValueWrapper(String FldName, String Nam, Boolean selected, Integer num,String fieldLblaa){
            FieldName = FldName;
            Name = Nam;
            isSelected = selected;
            indexId = num;
            FieldLbl = fieldLblaa;
        }
    }
}
