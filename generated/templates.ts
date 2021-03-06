// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class LendingPoolAddressesProvider extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LendingPoolAddressesProvider", [
      address.toHex()
    ]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "LendingPoolAddressesProvider",
      [address.toHex()],
      context
    );
  }
}

export class LendingPool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LendingPool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "LendingPool",
      [address.toHex()],
      context
    );
  }
}

export class LendingPoolConfigurator extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LendingPoolConfigurator", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "LendingPoolConfigurator",
      [address.toHex()],
      context
    );
  }
}

export class AToken extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("AToken", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("AToken", [address.toHex()], context);
  }
}
