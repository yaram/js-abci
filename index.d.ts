export { abci, common, google } from './types'
import * as types from 'abci'
import { Server } from 'net'

export interface Handler{
    echo?: (request: types.abci.IRequestEcho) => types.abci.IResponseEcho
    flush?: (request: types.abci.IRequestFlush) => types.abci.IResponseFlush
    info?: (request: types.abci.IRequestInfo) => types.abci.IResponseInfo
    setOption?: (request: types.abci.IRequestSetOption) => types.abci.IResponseSetOption
    initChain?: (request: types.abci.IRequestInitChain) => types.abci.IResponseInitChain
    query?: (request: types.abci.IRequestQuery) => types.abci.IResponseQuery
    beginBlock?: (request: types.abci.IRequestBeginBlock) => types.abci.IResponseBeginBlock
    checkTx?: (request: types.abci.IRequestCheckTx) => types.abci.IResponseCheckTx
    deliverTx?: (request: types.abci.IRequestDeliverTx) => types.abci.IResponseDeliverTx
    endBlock?: (request: types.abci.IRequestEndBlock) => types.abci.IResponseEndBlock
    commit?: (request: types.abci.IRequestCommit) => types.abci.IResponseCommit
}

export function createServer(handler: Handler): Server
