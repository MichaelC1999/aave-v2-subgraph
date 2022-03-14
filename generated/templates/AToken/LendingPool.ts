// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Borrow extends ethereum.Event {
  get params(): Borrow__Params {
    return new Borrow__Params(this);
  }
}

export class Borrow__Params {
  _event: Borrow;

  constructor(event: Borrow) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get onBehalfOf(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get borrowRateMode(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get borrowRate(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get referral(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get onBehalfOf(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get referral(): i32 {
    return this._event.parameters[4].value.toI32();
  }
}

export class FlashLoan extends ethereum.Event {
  get params(): FlashLoan__Params {
    return new FlashLoan__Params(this);
  }
}

export class FlashLoan__Params {
  _event: FlashLoan;

  constructor(event: FlashLoan) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get initiator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get asset(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get premium(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get referralCode(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class LiquidationCall extends ethereum.Event {
  get params(): LiquidationCall__Params {
    return new LiquidationCall__Params(this);
  }
}

export class LiquidationCall__Params {
  _event: LiquidationCall;

  constructor(event: LiquidationCall) {
    this._event = event;
  }

  get collateralAsset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get debtAsset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get debtToCover(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get liquidatedCollateralAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get liquidator(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get receiveAToken(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }
}

export class RebalanceStableBorrowRate extends ethereum.Event {
  get params(): RebalanceStableBorrowRate__Params {
    return new RebalanceStableBorrowRate__Params(this);
  }
}

export class RebalanceStableBorrowRate__Params {
  _event: RebalanceStableBorrowRate;

  constructor(event: RebalanceStableBorrowRate) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Repay extends ethereum.Event {
  get params(): Repay__Params {
    return new Repay__Params(this);
  }
}

export class Repay__Params {
  _event: Repay;

  constructor(event: Repay) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get repayer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ReserveDataUpdated extends ethereum.Event {
  get params(): ReserveDataUpdated__Params {
    return new ReserveDataUpdated__Params(this);
  }
}

export class ReserveDataUpdated__Params {
  _event: ReserveDataUpdated;

  constructor(event: ReserveDataUpdated) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get liquidityRate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get stableBorrowRate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get variableBorrowRate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get liquidityIndex(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get variableBorrowIndex(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class ReserveUsedAsCollateralDisabled extends ethereum.Event {
  get params(): ReserveUsedAsCollateralDisabled__Params {
    return new ReserveUsedAsCollateralDisabled__Params(this);
  }
}

export class ReserveUsedAsCollateralDisabled__Params {
  _event: ReserveUsedAsCollateralDisabled;

  constructor(event: ReserveUsedAsCollateralDisabled) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ReserveUsedAsCollateralEnabled extends ethereum.Event {
  get params(): ReserveUsedAsCollateralEnabled__Params {
    return new ReserveUsedAsCollateralEnabled__Params(this);
  }
}

export class ReserveUsedAsCollateralEnabled__Params {
  _event: ReserveUsedAsCollateralEnabled;

  constructor(event: ReserveUsedAsCollateralEnabled) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get rateMode(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LendingPool__getConfigurationResultValue0Struct extends ethereum.Tuple {
  get data(): BigInt {
    return this[0].toBigInt();
  }
}

export class LendingPool__getReserveDataResultValue0Struct extends ethereum.Tuple {
  get configuration(): LendingPool__getReserveDataResultValue0ConfigurationStruct {
    return changetype<
      LendingPool__getReserveDataResultValue0ConfigurationStruct
    >(this[0].toTuple());
  }

  get liquidityIndex(): BigInt {
    return this[1].toBigInt();
  }

  get variableBorrowIndex(): BigInt {
    return this[2].toBigInt();
  }

  get currentLiquidityRate(): BigInt {
    return this[3].toBigInt();
  }

  get currentVariableBorrowRate(): BigInt {
    return this[4].toBigInt();
  }

  get currentStableBorrowRate(): BigInt {
    return this[5].toBigInt();
  }

  get lastUpdateTimestamp(): BigInt {
    return this[6].toBigInt();
  }

  get aTokenAddress(): Address {
    return this[7].toAddress();
  }

  get stableDebtTokenAddress(): Address {
    return this[8].toAddress();
  }

  get variableDebtTokenAddress(): Address {
    return this[9].toAddress();
  }

  get interestRateStrategyAddress(): Address {
    return this[10].toAddress();
  }

  get id(): i32 {
    return this[11].toI32();
  }
}

export class LendingPool__getReserveDataResultValue0ConfigurationStruct extends ethereum.Tuple {
  get data(): BigInt {
    return this[0].toBigInt();
  }
}

export class LendingPool__getUserAccountDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }
}

export class LendingPool__getUserConfigurationResultValue0Struct extends ethereum.Tuple {
  get data(): BigInt {
    return this[0].toBigInt();
  }
}

export class LendingPool extends ethereum.SmartContract {
  static bind(address: Address): LendingPool {
    return new LendingPool("LendingPool", address);
  }

  FLASHLOAN_PREMIUM_TOTAL(): BigInt {
    let result = super.call(
      "FLASHLOAN_PREMIUM_TOTAL",
      "FLASHLOAN_PREMIUM_TOTAL():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_FLASHLOAN_PREMIUM_TOTAL(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "FLASHLOAN_PREMIUM_TOTAL",
      "FLASHLOAN_PREMIUM_TOTAL():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  LENDINGPOOL_REVISION(): BigInt {
    let result = super.call(
      "LENDINGPOOL_REVISION",
      "LENDINGPOOL_REVISION():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_LENDINGPOOL_REVISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "LENDINGPOOL_REVISION",
      "LENDINGPOOL_REVISION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_NUMBER_RESERVES(): BigInt {
    let result = super.call(
      "MAX_NUMBER_RESERVES",
      "MAX_NUMBER_RESERVES():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_NUMBER_RESERVES(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_NUMBER_RESERVES",
      "MAX_NUMBER_RESERVES():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_STABLE_RATE_BORROW_SIZE_PERCENT(): BigInt {
    let result = super.call(
      "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
      "MAX_STABLE_RATE_BORROW_SIZE_PERCENT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_STABLE_RATE_BORROW_SIZE_PERCENT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
      "MAX_STABLE_RATE_BORROW_SIZE_PERCENT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAddressesProvider(): Address {
    let result = super.call(
      "getAddressesProvider",
      "getAddressesProvider():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getAddressesProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAddressesProvider",
      "getAddressesProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getConfiguration(
    asset: Address
  ): LendingPool__getConfigurationResultValue0Struct {
    let result = super.call(
      "getConfiguration",
      "getConfiguration(address):((uint256))",
      [ethereum.Value.fromAddress(asset)]
    );

    return changetype<LendingPool__getConfigurationResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getConfiguration(
    asset: Address
  ): ethereum.CallResult<LendingPool__getConfigurationResultValue0Struct> {
    let result = super.tryCall(
      "getConfiguration",
      "getConfiguration(address):((uint256))",
      [ethereum.Value.fromAddress(asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<LendingPool__getConfigurationResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getReserveData(
    asset: Address
  ): LendingPool__getReserveDataResultValue0Struct {
    let result = super.call(
      "getReserveData",
      "getReserveData(address):(((uint256),uint128,uint128,uint128,uint128,uint128,uint40,address,address,address,address,uint8))",
      [ethereum.Value.fromAddress(asset)]
    );

    return changetype<LendingPool__getReserveDataResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getReserveData(
    asset: Address
  ): ethereum.CallResult<LendingPool__getReserveDataResultValue0Struct> {
    let result = super.tryCall(
      "getReserveData",
      "getReserveData(address):(((uint256),uint128,uint128,uint128,uint128,uint128,uint40,address,address,address,address,uint8))",
      [ethereum.Value.fromAddress(asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<LendingPool__getReserveDataResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getReserveNormalizedIncome(asset: Address): BigInt {
    let result = super.call(
      "getReserveNormalizedIncome",
      "getReserveNormalizedIncome(address):(uint256)",
      [ethereum.Value.fromAddress(asset)]
    );

    return result[0].toBigInt();
  }

  try_getReserveNormalizedIncome(asset: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReserveNormalizedIncome",
      "getReserveNormalizedIncome(address):(uint256)",
      [ethereum.Value.fromAddress(asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReserveNormalizedVariableDebt(asset: Address): BigInt {
    let result = super.call(
      "getReserveNormalizedVariableDebt",
      "getReserveNormalizedVariableDebt(address):(uint256)",
      [ethereum.Value.fromAddress(asset)]
    );

    return result[0].toBigInt();
  }

  try_getReserveNormalizedVariableDebt(
    asset: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReserveNormalizedVariableDebt",
      "getReserveNormalizedVariableDebt(address):(uint256)",
      [ethereum.Value.fromAddress(asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReservesList(): Array<Address> {
    let result = super.call(
      "getReservesList",
      "getReservesList():(address[])",
      []
    );

    return result[0].toAddressArray();
  }

  try_getReservesList(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getReservesList",
      "getReservesList():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getUserAccountData(user: Address): LendingPool__getUserAccountDataResult {
    let result = super.call(
      "getUserAccountData",
      "getUserAccountData(address):(uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return new LendingPool__getUserAccountDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_getUserAccountData(
    user: Address
  ): ethereum.CallResult<LendingPool__getUserAccountDataResult> {
    let result = super.tryCall(
      "getUserAccountData",
      "getUserAccountData(address):(uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LendingPool__getUserAccountDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  getUserConfiguration(
    user: Address
  ): LendingPool__getUserConfigurationResultValue0Struct {
    let result = super.call(
      "getUserConfiguration",
      "getUserConfiguration(address):((uint256))",
      [ethereum.Value.fromAddress(user)]
    );

    return changetype<LendingPool__getUserConfigurationResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getUserConfiguration(
    user: Address
  ): ethereum.CallResult<LendingPool__getUserConfigurationResultValue0Struct> {
    let result = super.tryCall(
      "getUserConfiguration",
      "getUserConfiguration(address):((uint256))",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<LendingPool__getUserConfigurationResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  repay(
    asset: Address,
    amount: BigInt,
    rateMode: BigInt,
    onBehalfOf: Address
  ): BigInt {
    let result = super.call(
      "repay",
      "repay(address,uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(rateMode),
        ethereum.Value.fromAddress(onBehalfOf)
      ]
    );

    return result[0].toBigInt();
  }

  try_repay(
    asset: Address,
    amount: BigInt,
    rateMode: BigInt,
    onBehalfOf: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "repay",
      "repay(address,uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(rateMode),
        ethereum.Value.fromAddress(onBehalfOf)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdraw(asset: Address, amount: BigInt, to: Address): BigInt {
    let result = super.call(
      "withdraw",
      "withdraw(address,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(to)
      ]
    );

    return result[0].toBigInt();
  }

  try_withdraw(
    asset: Address,
    amount: BigInt,
    to: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdraw",
      "withdraw(address,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(to)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class BorrowCall extends ethereum.Call {
  get inputs(): BorrowCall__Inputs {
    return new BorrowCall__Inputs(this);
  }

  get outputs(): BorrowCall__Outputs {
    return new BorrowCall__Outputs(this);
  }
}

export class BorrowCall__Inputs {
  _call: BorrowCall;

  constructor(call: BorrowCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get interestRateMode(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get referralCode(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get onBehalfOf(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class BorrowCall__Outputs {
  _call: BorrowCall;

  constructor(call: BorrowCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get onBehalfOf(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get referralCode(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class FinalizeTransferCall extends ethereum.Call {
  get inputs(): FinalizeTransferCall__Inputs {
    return new FinalizeTransferCall__Inputs(this);
  }

  get outputs(): FinalizeTransferCall__Outputs {
    return new FinalizeTransferCall__Outputs(this);
  }
}

export class FinalizeTransferCall__Inputs {
  _call: FinalizeTransferCall;

  constructor(call: FinalizeTransferCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get balanceFromBefore(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get balanceToBefore(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class FinalizeTransferCall__Outputs {
  _call: FinalizeTransferCall;

  constructor(call: FinalizeTransferCall) {
    this._call = call;
  }
}

export class FlashLoanCall extends ethereum.Call {
  get inputs(): FlashLoanCall__Inputs {
    return new FlashLoanCall__Inputs(this);
  }

  get outputs(): FlashLoanCall__Outputs {
    return new FlashLoanCall__Outputs(this);
  }
}

export class FlashLoanCall__Inputs {
  _call: FlashLoanCall;

  constructor(call: FlashLoanCall) {
    this._call = call;
  }

  get receiverAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assets(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get modes(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get onBehalfOf(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get params(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get referralCode(): i32 {
    return this._call.inputValues[6].value.toI32();
  }
}

export class FlashLoanCall__Outputs {
  _call: FlashLoanCall;

  constructor(call: FlashLoanCall) {
    this._call = call;
  }
}

export class InitReserveCall extends ethereum.Call {
  get inputs(): InitReserveCall__Inputs {
    return new InitReserveCall__Inputs(this);
  }

  get outputs(): InitReserveCall__Outputs {
    return new InitReserveCall__Outputs(this);
  }
}

export class InitReserveCall__Inputs {
  _call: InitReserveCall;

  constructor(call: InitReserveCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get aTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get stableDebtAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get variableDebtAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get interestRateStrategyAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class InitReserveCall__Outputs {
  _call: InitReserveCall;

  constructor(call: InitReserveCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get provider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class LiquidationCallCall extends ethereum.Call {
  get inputs(): LiquidationCallCall__Inputs {
    return new LiquidationCallCall__Inputs(this);
  }

  get outputs(): LiquidationCallCall__Outputs {
    return new LiquidationCallCall__Outputs(this);
  }
}

export class LiquidationCallCall__Inputs {
  _call: LiquidationCallCall;

  constructor(call: LiquidationCallCall) {
    this._call = call;
  }

  get collateralAsset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get debtAsset(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get user(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get debtToCover(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get receiveAToken(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class LiquidationCallCall__Outputs {
  _call: LiquidationCallCall;

  constructor(call: LiquidationCallCall) {
    this._call = call;
  }
}

export class RebalanceStableBorrowRateCall extends ethereum.Call {
  get inputs(): RebalanceStableBorrowRateCall__Inputs {
    return new RebalanceStableBorrowRateCall__Inputs(this);
  }

  get outputs(): RebalanceStableBorrowRateCall__Outputs {
    return new RebalanceStableBorrowRateCall__Outputs(this);
  }
}

export class RebalanceStableBorrowRateCall__Inputs {
  _call: RebalanceStableBorrowRateCall;

  constructor(call: RebalanceStableBorrowRateCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RebalanceStableBorrowRateCall__Outputs {
  _call: RebalanceStableBorrowRateCall;

  constructor(call: RebalanceStableBorrowRateCall) {
    this._call = call;
  }
}

export class RepayCall extends ethereum.Call {
  get inputs(): RepayCall__Inputs {
    return new RepayCall__Inputs(this);
  }

  get outputs(): RepayCall__Outputs {
    return new RepayCall__Outputs(this);
  }
}

export class RepayCall__Inputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get rateMode(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get onBehalfOf(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class RepayCall__Outputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetConfigurationCall extends ethereum.Call {
  get inputs(): SetConfigurationCall__Inputs {
    return new SetConfigurationCall__Inputs(this);
  }

  get outputs(): SetConfigurationCall__Outputs {
    return new SetConfigurationCall__Outputs(this);
  }
}

export class SetConfigurationCall__Inputs {
  _call: SetConfigurationCall;

  constructor(call: SetConfigurationCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get configuration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetConfigurationCall__Outputs {
  _call: SetConfigurationCall;

  constructor(call: SetConfigurationCall) {
    this._call = call;
  }
}

export class SetPauseCall extends ethereum.Call {
  get inputs(): SetPauseCall__Inputs {
    return new SetPauseCall__Inputs(this);
  }

  get outputs(): SetPauseCall__Outputs {
    return new SetPauseCall__Outputs(this);
  }
}

export class SetPauseCall__Inputs {
  _call: SetPauseCall;

  constructor(call: SetPauseCall) {
    this._call = call;
  }

  get val(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetPauseCall__Outputs {
  _call: SetPauseCall;

  constructor(call: SetPauseCall) {
    this._call = call;
  }
}

export class SetReserveInterestRateStrategyAddressCall extends ethereum.Call {
  get inputs(): SetReserveInterestRateStrategyAddressCall__Inputs {
    return new SetReserveInterestRateStrategyAddressCall__Inputs(this);
  }

  get outputs(): SetReserveInterestRateStrategyAddressCall__Outputs {
    return new SetReserveInterestRateStrategyAddressCall__Outputs(this);
  }
}

export class SetReserveInterestRateStrategyAddressCall__Inputs {
  _call: SetReserveInterestRateStrategyAddressCall;

  constructor(call: SetReserveInterestRateStrategyAddressCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rateStrategyAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetReserveInterestRateStrategyAddressCall__Outputs {
  _call: SetReserveInterestRateStrategyAddressCall;

  constructor(call: SetReserveInterestRateStrategyAddressCall) {
    this._call = call;
  }
}

export class SetUserUseReserveAsCollateralCall extends ethereum.Call {
  get inputs(): SetUserUseReserveAsCollateralCall__Inputs {
    return new SetUserUseReserveAsCollateralCall__Inputs(this);
  }

  get outputs(): SetUserUseReserveAsCollateralCall__Outputs {
    return new SetUserUseReserveAsCollateralCall__Outputs(this);
  }
}

export class SetUserUseReserveAsCollateralCall__Inputs {
  _call: SetUserUseReserveAsCollateralCall;

  constructor(call: SetUserUseReserveAsCollateralCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get useAsCollateral(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetUserUseReserveAsCollateralCall__Outputs {
  _call: SetUserUseReserveAsCollateralCall;

  constructor(call: SetUserUseReserveAsCollateralCall) {
    this._call = call;
  }
}

export class SwapBorrowRateModeCall extends ethereum.Call {
  get inputs(): SwapBorrowRateModeCall__Inputs {
    return new SwapBorrowRateModeCall__Inputs(this);
  }

  get outputs(): SwapBorrowRateModeCall__Outputs {
    return new SwapBorrowRateModeCall__Outputs(this);
  }
}

export class SwapBorrowRateModeCall__Inputs {
  _call: SwapBorrowRateModeCall;

  constructor(call: SwapBorrowRateModeCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rateMode(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SwapBorrowRateModeCall__Outputs {
  _call: SwapBorrowRateModeCall;

  constructor(call: SwapBorrowRateModeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
