var MeetupBaseOutput={
  "contracts" : 
  {
    "MeetupBase_Simple.sol:MeetupAccessControl" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"organiserAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newAssistant\",\"type\":\"address\"}],\"name\":\"setAssistant_1\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOrganiser\",\"type\":\"address\"}],\"name\":\"setOrganiser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"assistantAddress_1\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newAssistant\",\"type\":\"address\"}],\"name\":\"setAssistant_2\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"assistantAddress_2\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
      "bin" : "60806040526002805460a060020a60ff021916905534801561002057600080fd5b5061046c806100306000396000f30060806040526004361061008d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304e3c9b881146100925780633f4ba83a146100c357806377bdfc57146100da5780638456cb59146100fb5780638c4b0e7e14610110578063c8ded43e14610131578063d923192714610146578063d92a174514610167575b600080fd5b34801561009e57600080fd5b506100a761017c565b60408051600160a060020a039092168252519081900360200190f35b3480156100cf57600080fd5b506100d861018b565b005b3480156100e657600080fd5b506100d8600160a060020a03600435166101ef565b34801561010757600080fd5b506100d8610282565b34801561011c57600080fd5b506100d8600160a060020a0360043516610330565b34801561013d57600080fd5b506100a761038f565b34801561015257600080fd5b506100d8600160a060020a036004351661039e565b34801561017357600080fd5b506100a7610431565b600054600160a060020a031681565b60005433600160a060020a039081169116146101a657600080fd5b60025474010000000000000000000000000000000000000000900460ff1615156101cf57600080fd5b6002805474ff000000000000000000000000000000000000000019169055565b60005433600160a060020a039081169116148061021a575060015433600160a060020a039081169116145b80610233575060025433600160a060020a039081169116145b151561023e57600080fd5b600160a060020a038116151561025357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60005433600160a060020a03908116911614806102ad575060015433600160a060020a039081169116145b806102c6575060025433600160a060020a039081169116145b15156102d157600080fd5b60025474010000000000000000000000000000000000000000900460ff16156102f957600080fd5b6002805474ff0000000000000000000000000000000000000000191674010000000000000000000000000000000000000000179055565b60005433600160a060020a0390811691161461034b57600080fd5b600160a060020a038116151561036057600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b60005433600160a060020a03908116911614806103c9575060015433600160a060020a039081169116145b806103e2575060025433600160a060020a039081169116145b15156103ed57600080fd5b600160a060020a038116151561040257600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a0316815600a165627a7a723058201756b908fa3aaef680332695337fcfd7c61e282212984cf378caaf8c58a5c75c0029"
    },
    "MeetupBase_Simple.sol:MeetupBase" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"organiserAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"bytes32\"}],\"name\":\"registerUser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"users\",\"outputs\":[{\"name\":\"userCreateTime\",\"type\":\"uint64\"},{\"name\":\"userAddress\",\"type\":\"address\"},{\"name\":\"userName\",\"type\":\"bytes32\"},{\"name\":\"hasDeregistered\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"meetups\",\"outputs\":[{\"name\":\"createTime\",\"type\":\"uint64\"},{\"name\":\"startTime\",\"type\":\"uint64\"},{\"name\":\"maxCapacity\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"bytes32\"}],\"name\":\"deregisterUser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getMeetupCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_startTime\",\"type\":\"uint64\"},{\"name\":\"_maxCapacity\",\"type\":\"uint8\"}],\"name\":\"createMeetup\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"userToAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newAssistant\",\"type\":\"address\"}],\"name\":\"setAssistant_1\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOrganiser\",\"type\":\"address\"}],\"name\":\"setOrganiser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_userName\",\"type\":\"bytes32\"}],\"name\":\"createUser\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getUser\",\"outputs\":[{\"name\":\"userCreateTime\",\"type\":\"uint64\"},{\"name\":\"userAddress\",\"type\":\"address\"},{\"name\":\"userName\",\"type\":\"bytes32\"},{\"name\":\"hasDeregistered\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"assistantAddress_1\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newAssistant\",\"type\":\"address\"}],\"name\":\"setAssistant_2\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"assistantAddress_2\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"addressToUser\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"startTime\",\"type\":\"uint64\"},{\"indexed\":false,\"name\":\"maxCapacity\",\"type\":\"uint8\"}],\"name\":\"MeeupEventCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"userCreateTime\",\"type\":\"uint64\"},{\"indexed\":false,\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"userName\",\"type\":\"bytes32\"}],\"name\":\"UserCreated\",\"type\":\"event\"}]",
      "bin" : "60806040526002805460a060020a60ff021916905534801561002057600080fd5b5060008054600160a060020a033316600160a060020a0319918216811790925560018054821683179055600280549091169091179055610c33806100656000396000f3006080604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304e3c9b881146101005780632dc0325914610131578063365b98b21461014b57806337026ae11461019e5780633f4ba83a146101e457806347546970146101f9578063539f7fb7146102115780635fc0aca2146102385780636c88beeb1461026057806377bdfc57146102785780638456cb59146102995780638c4b0e7e146102ae578063abf7bfd8146102cf578063b0467deb146102e7578063c8ded43e146102ff578063d923192714610314578063d92a174514610335578063edf538861461034a575b600080fd5b34801561010c57600080fd5b5061011561036b565b60408051600160a060020a039092168252519081900360200190f35b34801561013d57600080fd5b5061014960043561037a565b005b34801561015757600080fd5b506101636004356103ed565b6040805167ffffffffffffffff9095168552600160a060020a0390931660208501528383019190915215156060830152519081900360800190f35b3480156101aa57600080fd5b506101b6600435610443565b6040805167ffffffffffffffff948516815292909316602083015260ff168183015290519081900360600190f35b3480156101f057600080fd5b50610149610493565b34801561020557600080fd5b506101496004356104f7565b34801561021d57600080fd5b506102266105b3565b60408051918252519081900360200190f35b34801561024457600080fd5b5061022667ffffffffffffffff6004351660ff602435166105b9565b34801561026c57600080fd5b50610115600435610743565b34801561028457600080fd5b50610149600160a060020a036004351661075e565b3480156102a557600080fd5b506101496107f1565b3480156102ba57600080fd5b50610149600160a060020a036004351661089f565b3480156102db57600080fd5b506102266004356108fe565b3480156102f357600080fd5b50610163600435610a95565b34801561030b57600080fd5b50610115610afd565b34801561032057600080fd5b50610149600160a060020a0360043516610b0c565b34801561034157600080fd5b50610115610b9f565b34801561035657600080fd5b50610226600160a060020a0360043516610bae565b600054600160a060020a031681565b600081815260056020526040902054600160a060020a031615801561039e57508015155b156103ea57600160a060020a033316600081815260066020908152604080832085905584835260059091529020805473ffffffffffffffffffffffffffffffffffffffff191690911790555b50565b60048054829081106103fb57fe5b600091825260209091206003909102018054600182015460029092015467ffffffffffffffff8216935068010000000000000000909104600160a060020a0316919060ff1684565b600380548290811061045157fe5b60009182526020909120015467ffffffffffffffff80821692506801000000000000000082041690700100000000000000000000000000000000900460ff1683565b60005433600160a060020a039081169116146104ae57600080fd5b60025474010000000000000000000000000000000000000000900460ff1615156104d757600080fd5b6002805474ff000000000000000000000000000000000000000019169055565b60005433600160a060020a0390811691161480610522575060015433600160a060020a039081169116145b8061053b575060025433600160a060020a039081169116145b151561054657600080fd5b600081815260056020526040902054600160a060020a03161580159061056b57508015155b156103ea5733600160a060020a031660009081526006602090815260408083208390559282526005905220805473ffffffffffffffffffffffffffffffffffffffff19169055565b60035490565b60006105c3610bc0565b6000805433600160a060020a03908116911614806105ef575060015433600160a060020a039081169116145b80610608575060025433600160a060020a039081169116145b151561061357600080fd5b67ffffffffffffffff4281169086161161062c57600080fd5b50506040805160608101825267ffffffffffffffff4281168252858116602080840182815260ff8089168688018181526003805460018101825560009190915288517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b82018054965193519095167001000000000000000000000000000000000270ff0000000000000000000000000000000019938a1668010000000000000000026fffffffffffffffff00000000000000001992909a1667ffffffffffffffff19909716969096171697909717169290921790558551928352908201528351929391927fab0cb854bf4985f2a74779a5e848b4080deb126d0833eb6aa3239d5e1e663f56929181900390910190a1949350505050565b600560205260009081526040902054600160a060020a031681565b60005433600160a060020a0390811691161480610789575060015433600160a060020a039081169116145b806107a2575060025433600160a060020a039081169116145b15156107ad57600080fd5b600160a060020a03811615156107c257600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60005433600160a060020a039081169116148061081c575060015433600160a060020a039081169116145b80610835575060025433600160a060020a039081169116145b151561084057600080fd5b60025474010000000000000000000000000000000000000000900460ff161561086857600080fd5b6002805474ff0000000000000000000000000000000000000000191674010000000000000000000000000000000000000000179055565b60005433600160a060020a039081169116146108ba57600080fd5b600160a060020a03811615156108cf57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000610908610be0565b6000600160a060020a0333161580159061092157508315155b151561092c57600080fd5b50506040805160808101825267ffffffffffffffff428116808352600160a060020a033381166020808601918252858701898152600060608089018281526004805460018101825593528951600384027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b81018054985190991668010000000000000000027fffffffff0000000000000000000000000000000000000000ffffffffffffffff92909b1667ffffffffffffffff1990981697909717169890981790955590517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c84015594517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19d909201805492151560ff1990931692909217909155855192835282018390528185018790529351929391927f76132e572dfc008b139657cf5c9ddbed5df48e5d9eac3df431a8dc6653d6683f929181900390910190a19392505050565b6000806000806000600486815481101515610aac57fe5b600091825260209091206003909102018054600182015460029092015467ffffffffffffffff82169968010000000000000000909204600160a060020a0316985091965060ff909116945092505050565b600154600160a060020a031681565b60005433600160a060020a0390811691161480610b37575060015433600160a060020a039081169116145b80610b50575060025433600160a060020a039081169116145b1515610b5b57600080fd5b600160a060020a0381161515610b7057600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a031681565b60066020526000908152604090205481565b604080516060810182526000808252602082018190529181019190915290565b604080516080810182526000808252602082018190529181018290526060810191909152905600a165627a7a7230582037ab7419c94377fc798c8733ce658b4901d2600fed46be133167c1e239e5cb2d0029"
    }
  },
  "version" : "0.4.23+commit.124ca40d.Linux.g++"
};
