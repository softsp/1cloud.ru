request = require 'request'

prepareOptions=(url,key,type='GET',data=null)->
  tmp = {}
  tmp.headers ={
    Authorization: 'Bearer ' + key
  }
  tmp.uri = url
  tmp.json = true
  tmp.method = type
  tmp.body = data
  tmp

# получить список образов
# token: уникальный закрытый ключ
getImages=(token,callback)->
  request prepareOptions("https://api.1cloud.ru/image",token), (err,res,body)=>
    if !error
      callback res.statusCode, body

# получить список всех серверов
# token: уникальный закрытый ключ
getAllServers=(token,callback)->
  request prepareOptions("https://api.1cloud.ru/server",token), (err,res,body)=>
    if !error
      callback res.statusCode, body

# получить сервер по идентификатору
# token: уникальный закрытый ключ
# id: уникальный идентификатор сервера
getServer=(token,id,callback)->
  request prepareOptions("https://api.1cloud.ru/server/#{id}",token), (err,res,body)=>
    if !error
      callback res.statusCode, body


# получить информацию о всех действиях сервера
# token: уникальный закрытый ключ
# id: уникальный идентификатор сервера
getAllActions=(token,id,callback)->
  request prepareOptions("https://api.1cloud.ru/server/#{id}/action",token), (err,res,body)=>
    if !error
      callback res.statusCode, body

# получить информацию о действии
# token: уникальный закрытый ключ
# id: уникальный идентификатор сервера
# actionID: уникальный идентификатор действия
getAction=(token,id,actionID,callback)->
  request prepareOptions("https://api.1cloud.ru/server/#{id}/action/#{actionID}",token), (err,res,body)=>
    if !error
      callback res.statusCode, body

# управление питанием сервера
# token: уникальный закрытый ключ
# id: уникальный идентификатор сервера
# type: тип задания, которое необходимо выполнить
setPower=(token,id,type,callback)->
  request prepareOptions("https://api.1cloud.ru/server/#{id}/action",token,'POST',Type: type), (err,res,body)=>
    if !error
      callback res.statusCode, body

# создать сервер
# token: уникальный закрытый ключ
# params: параметры сервера
createServer=(token,params,callback)->
  request prepareOptions("https://api.1cloud.ru/server",token,'POST',params), (err,res,body)=>
    if !error
      callback res.statusCode, body

# удалить сервер
# token: уникальный закрытый ключ
# id: уникальный идентификатор сервера
deleteServer=(token,id,callback)->
  request prepareOptions("https://api.1cloud.ru/server/#{id}",token,'DELETE'), (err,res,body)=>
    if !error
      callback res.statusCode, body

# изменить конфигурацию сервера
# token: уникальный закрытый ключ
# params: конфигурация сервера
editServer=(token,id,params,callback)->
  request prepareOptions("https://api.1cloud.ru/server/#{id}",token,'PUT',params), (err,res,body)=>
    if !error
      callback res.statusCode, body



# exports
module.exports.getImages = getImages
module.exports.getAllServers = getAllServers
module.exports.getServer = getServer
module.exports.getAllActions = getAllActions
module.exports.getAction = getAction
module.exports.setPower = setPower
module.exports.createServer = createServer
module.exports.deleteServer = deleteServer
module.exports.editServer = editServer