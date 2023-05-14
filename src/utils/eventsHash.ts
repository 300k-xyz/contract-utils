export const eventsAbiMap: Record<string, string> = {
  // ERC20 events
  '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925': 'Approval(address,address,uint256)',
  '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef': 'Transfer(address,address,uint256)',
  // WETH events
  '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c': 'Deposit(address,uint256)',
  '0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65': 'Withdrawal(address,uint256)',
  // ERC721
  '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0': 'OwnershipTransferred(address,address)',
  // ERC1155
  '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb':
    'TransferBatch(address,address,address,uint256[],uint256[])',
  '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62':
    'TransferSingle(address,address,address,uint256,uint256)',
  '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b': 'URI(string,uint256)',
  // uniswap events
  '0x0c396cd989a39f4459b5fa1aed6a9a8dcdbc45908acfd67e028cd568da98982c':
    'Burn(address,int24,int24,uint128,uint256,uint256)',
  '0x70935338e69775456a85ddef226c395fb668b63fa0115f5f20610b388e6ca9c0':
    'Collect(address,address,int24,int24,uint128,uint128)',
  '0x596b573906218d3411850b26a6b437d6c4522fdb43d2d2386263f86d50b8b151':
    'CollectProtocol(address,address,uint128,uint128)',
  '0xbdbdb71d7860376ba52b25a5028beea23581364a40522f6bcfb86bb1f2dca633':
    'Flash(address,address,uint256,uint256,uint256,uint256)',
  '0xac49e518f90a358f652e4400164f05a5d8f7e35e7747279bc3a93dbf584e125a':
    'IncreaseObservationCardinalityNext(uint16,uint16)',
  '0x98636036cb66a9c19a37435efc1e90142190214e8abeb821bdba3f2990dd4c95': 'Initialize(uint160,int24)',
  '0x7a53080ba414158be7ec69b987b5fb7d07dee101fe85488f0853ae16239d0bde':
    'Mint(address,address,int24,int24,uint128,uint256,uint256)',
  '0x973d8d92bb299f4af6ce49b52a8adb85ae46b9f214c4c4fc06ac77401237b133': 'SetFeeProtocol(uint8,uint8,uint8,uint8)',
  '0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67':
    'Swap(address,address,int256,int256,uint160,uint128,int24)',
  '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31': 'ApprovalForAll(address,address,bool)',
  '0x40d0efd1a53d60ecbf40971b9daf7dc90178c3aadc7aab1765632738fa8b8f01': 'Collect(uint256,address,uint256,uint256)',
  '0x26f6a048ee9138f2c0ce266f322cb99228e8d619ae2bff30c67f8dcf9d2377b4':
    'DecreaseLiquidity(uint256,uint128,uint256,uint256)',
  '0x3067048beee31b25b2f1681f88dac838c8bba36af25bfb2b7cf7473a5847e35f':
    'IncreaseLiquidity(uint256,uint128,uint256,uint256)',
  '0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1': 'Swap(uint256,uint256)',
};
