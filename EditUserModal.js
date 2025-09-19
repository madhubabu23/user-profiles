import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

function EditUserModal({ visible, user, onSave, onCancel }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
    }
  }, [user]);

  const handleOk = () => {
    form.validateFields()
      .then((values) => {
        onSave({ ...user, ...values });
        form.resetFields();
      });
  };

  return (
    <Modal title="Edit User" visible={visible} onOk={handleOk} onCancel={onCancel}>
      <Form layout="vertical" form={form}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['address', 'city']} label="City">
          <Input />
        </Form.Item>
        <Form.Item name={['company', 'name']} label="Company">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditUserModal;