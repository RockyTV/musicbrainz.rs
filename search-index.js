var searchIndex = {};
searchIndex["musicbrainz"] = {"doc":"","items":[[3,"Uuid","musicbrainz","A Universally Unique Identifier (UUID).",null,null],[3,"MusicBrainz","","",null,null],[0,"artist","","",null,null],[3,"Artist","musicbrainz::artist","",null,null],[12,"id","","",0,null],[12,"name","","",0,null],[12,"gender","","",0,null],[12,"artist_type","","",0,null],[12,"tags","","",0,null],[12,"release_groups","","",0,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"artist"}}],[11,"new","","",0,{"inputs":[{"name":"uuid"},{"name":"string"},{"name":"string"},{"name":"persontype"},{"name":"vec"},{"name":"vec"}],"output":{"name":"artist"}}],[11,"empty","","",0,{"inputs":[],"output":{"name":"artist"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"artist"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"artist"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"search","","",0,{"inputs":[{"name":"self"},{"name":"musicbrainz"},{"name":"hashmap"}],"output":{"name":"result"}}],[11,"lookup","","",0,{"inputs":[{"name":"self"},{"name":"musicbrainz"},{"name":"uuid"},{"name":"hashmap"}],"output":{"name":"result"}}],[0,"release_group","musicbrainz","",null,null],[3,"ReleaseGroup","musicbrainz::release_group","",null,null],[12,"title","","",1,null],[12,"release_date","","",1,null],[12,"id","","",1,null],[12,"artist","","",1,null],[12,"primary_type","","",1,null],[12,"secondary_types","","",1,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"releasegroup"}}],[11,"new","","",1,{"inputs":[{"name":"string"},{"name":"string"},{"name":"uuid"},{"name":"uuid"},{"name":"albumtype"},{"name":"vec"}],"output":{"name":"releasegroup"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"releasegroup"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"search","","",1,{"inputs":[{"name":"self"},{"name":"musicbrainz"},{"name":"hashmap"}],"output":{"name":"result"}}],[11,"lookup","","",1,{"inputs":[{"name":"self"},{"name":"musicbrainz"},{"name":"uuid"},{"name":"hashmap"}],"output":{"name":"result"}}],[0,"enums","musicbrainz","",null,null],[4,"PersonType","musicbrainz::enums","The PersonType enum is used to state whether an artist is a person, a group, or something else.",null,null],[13,"Person","","Indicates an individual person.",2,null],[13,"Group","","Indicates a group of people that may or may not have a distinctive name.",2,null],[13,"Orchestra","","Indicates an orchestra (a large instrumental ensemble).",2,null],[13,"Choir","","Indicates a choir/chorus (a large vocal ensemble).",2,null],[13,"Character","","Indicates an individual fictional character.",2,null],[13,"Other","","Anything which does not fit into the above categories.",2,null],[4,"AlbumType","","",null,null],[13,"Album","","",3,null],[13,"Single","","",3,null],[13,"EP","","",3,null],[13,"Broadcast","","",3,null],[13,"Compilation","","",3,null],[13,"Soundtrack","","",3,null],[13,"Spokenword","","",3,null],[13,"Interview","","",3,null],[13,"Audiobook","","",3,null],[13,"Live","","",3,null],[13,"Remix","","",3,null],[13,"DjMix","","",3,null],[13,"MixtapeStreet","","",3,null],[13,"Other","","",3,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"persontype"}}],[11,"from_str","","",2,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"albumtype"}}],[11,"from_str","","",3,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"traits","musicbrainz","",null,null],[8,"Entity","musicbrainz::traits","",null,null],[10,"search","","Searches MusicBrainz for entities based on the search query.",4,{"inputs":[{"name":"self"},{"name":"musicbrainz"},{"name":"hashmap"}],"output":{"name":"result"}}],[10,"lookup","","Performs a lookup of an entity by using its MusicBrainz Identifier.",4,{"inputs":[{"name":"self"},{"name":"musicbrainz"},{"name":"uuid"},{"name":"hashmap"}],"output":{"name":"result"}}],[0,"error","musicbrainz","",null,null],[4,"Error","musicbrainz::error","",null,null],[13,"Http","","",5,null],[13,"ParseJson","","",5,null],[13,"ParseUuid","","",5,null],[13,"AsSlice","","",5,null],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","musicbrainz","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Instantiates a new `MusicBrainz` struct.",6,{"inputs":[],"output":{"name":"musicbrainz"}}],[11,"artist","","",6,{"inputs":[{"name":"self"}],"output":{"name":"artist"}}],[11,"nil","","The 'nil UUID'.",7,{"inputs":[],"output":{"name":"uuid"}}],[11,"new","","Creates a new `Uuid`.",7,{"inputs":[{"name":"uuidversion"}],"output":{"name":"option"}}],[11,"from_fields","","Creates a `Uuid` from four field values.",7,null],[11,"from_bytes","","Creates a `Uuid` using the supplied bytes.",7,null],[11,"get_variant","","Returns the variant of the `Uuid` structure.",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"get_version_num","","Returns the version number of the `Uuid`.",7,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"get_version","","Returns the version of the `Uuid`.",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"as_bytes","","Return an array of 16 octets containing the UUID data",7,null],[11,"simple","","Returns a wrapper which when formatted via `fmt::Display` will format a string of 32 hexadecimal digits.",7,{"inputs":[{"name":"self"}],"output":{"name":"simple"}}],[11,"hyphenated","","Returns a wrapper which when formatted via `fmt::Display` will format a string of hexadecimal digits separated into gropus with a hyphen.",7,{"inputs":[{"name":"self"}],"output":{"name":"hyphenated"}}],[11,"urn","","Returns a wrapper which when formatted via `fmt::Display` will format a string of the UUID as a full URN string.",7,{"inputs":[{"name":"self"}],"output":{"name":"urn"}}],[11,"parse_str","","Parses a `Uuid` from a string of hexadecimal digits with optional hyphens.",7,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"is_nil","","Tests if the UUID is nil",7,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"default","","Returns the nil UUID, which is all zeroes",7,{"inputs":[],"output":{"name":"uuid"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"bool"}}],[11,"hash","","",7,null],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",7,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"ordering"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"uuid"}}],[11,"partial_cmp","","",7,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"option"}}],[11,"lt","","",7,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"bool"}}],[11,"le","","",7,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"bool"}}],[11,"gt","","",7,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"bool"}}],[11,"ge","","",7,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"bool"}}],[11,"from_str","","Parse a hex string and interpret as a `Uuid`.",7,{"inputs":[{"name":"str"}],"output":{"name":"result"}}]],"paths":[[3,"Artist"],[3,"ReleaseGroup"],[4,"PersonType"],[4,"AlbumType"],[8,"Entity"],[4,"Error"],[3,"MusicBrainz"],[3,"Uuid"]]};
initSearch(searchIndex);