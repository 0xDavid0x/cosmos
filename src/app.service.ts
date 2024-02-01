import { Injectable } from '@nestjs/common';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
@Injectable()
export class AppService {
  async stakeTIA() {
    // Create raw transaction
    // Sign transaction
    //Send transaction
    // const mnemonic =
    //   'depend loan crouch enough own smoke essay cabbage tag clinic style story';
    // const rpcUrl = 'https://public-celestia-rpc.numia.xyz';
    // const signer = await DirectSecp256k1HdWallet.fromMnemonic(
    //   mnemonic,
    //   { prefix: 'celestia' }, // Replace with your own Bech32 address prefix
    // );
    // console.log('🚀 ~ AppService ~ stakeTIA ~ signer:', signer);
    // const client = await SigningStargateClient.connectWithSigner(
    //   rpcUrl,
    //   signer,
    // );
    // console.log('🚀 ~ AppService ~ stakeTIA ~ client:', client);
    // const delegatorAddress = 'celestia12jkzncnlsstawtvu6s7nznk6d3sxnclxd5yjvg';
    // const validatorAddress =
    //   'celestiavaloper1uvytvhunccudw8fzaxvsrumec53nawyj939gj9';
    // const amount = { amount: '10000', denom: 'utia' };
    // const fee = {
    //   amount: [{ amount: '5000', denom: 'utia' }],
    //   gas: '250000',
    // };
    // const { accountNumber, sequence } =
    //   await client.getSequence(delegatorAddress);
    // const messages = {
    //   typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
    //   value: {
    //     delegatorAddress: delegatorAddress,
    //     validatorAddress: validatorAddress,
    //     amount: amount,
    //   },
    //   sequence,
    //   chainId: 'celestia',
    // };
    // console.log('🚀 ~ AppService ~ stakeTIA ~ messages:', messages);
    // console.log('🚀 ~ AppService ~ stakeTIA ~ accountNumber:', accountNumber);
    // const memo = '';
    // const tx = await client.sign(delegatorAddress, [messages], fee, memo);
    // const txRawBytes = Uint8Array.from(TxRaw.encode(tx).finish());
    // console.log('🚀 ~ AppService ~ stakeTIA ~ txRawBytes:', txRawBytes);
    // const transactionHash = await client.broadcastTxSync(txRawBytes);
    // return transactionHash;
  }
}
