export function finalMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.writable = false;
}
